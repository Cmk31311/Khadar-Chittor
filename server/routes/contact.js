const express = require('express')
const nodemailer = require('nodemailer')
const Contact = require('../models/Contact')
const router = express.Router()

// Create email transporter
const createTransporter = () => {
  return nodemailer.createTransporter({
    host: process.env.EMAIL_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.EMAIL_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  })
}

// POST /api/contact - Send contact message
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body
    const ipAddress = req.ip || req.connection.remoteAddress
    const userAgent = req.get('User-Agent') || 'Unknown'

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({
        error: 'Missing required fields',
        required: ['name', 'email', 'message']
      })
    }

    // Validate email format
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        error: 'Invalid email format'
      })
    }

    // Save to database
    const contactMessage = new Contact({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      message: message.trim(),
      ipAddress,
      userAgent
    })

    await contactMessage.save()

    // Send email notification (if email is configured)
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      try {
        const transporter = createTransporter()
        
        const mailOptions = {
          from: process.env.EMAIL_USER,
          to: 'cmkadhar3@gmail.com',
          subject: `New Contact Message from ${name}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #00FFFF; border-bottom: 2px solid #00FFFF; padding-bottom: 10px;">
                New Contact Message
              </h2>
              
              <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Date:</strong> ${contactMessage.formattedDate}</p>
                <p><strong>IP Address:</strong> ${ipAddress}</p>
              </div>
              
              <div style="background: #fff; padding: 20px; border-left: 4px solid #00FFFF; margin: 20px 0;">
                <h3 style="color: #333; margin-top: 0;">Message:</h3>
                <p style="line-height: 1.6; color: #555;">${message.replace(/\n/g, '<br>')}</p>
              </div>
              
              <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
                <p style="color: #666; font-size: 14px;">
                  This message was sent from your portfolio website contact form.
                </p>
              </div>
            </div>
          `
        }

        await transporter.sendMail(mailOptions)
        console.log('📧 Email notification sent successfully')
      } catch (emailError) {
        console.error('❌ Failed to send email notification:', emailError)
        // Don't fail the request if email fails
      }
    }

    res.status(201).json({
      success: true,
      message: 'Message sent successfully',
      id: contactMessage._id
    })

  } catch (error) {
    console.error('❌ Contact form error:', error)
    res.status(500).json({
      error: 'Failed to send message',
      ...(process.env.NODE_ENV === 'development' && { details: error.message })
    })
  }
})

// GET /api/contact - Get all contact messages (admin only)
router.get('/', async (req, res) => {
  try {
    // In a real application, you'd want proper authentication here
    const { page = 1, limit = 10, status } = req.query
    
    const query = {}
    if (status) {
      query.status = status
    }

    const contacts = await Contact.find(query)
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .select('-ipAddress -userAgent') // Exclude sensitive data

    const total = await Contact.countDocuments(query)

    res.json({
      contacts,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      total
    })
  } catch (error) {
    console.error('❌ Get contacts error:', error)
    res.status(500).json({
      error: 'Failed to fetch contacts',
      ...(process.env.NODE_ENV === 'development' && { details: error.message })
    })
  }
})

// PUT /api/contact/:id - Update contact status (admin only)
router.put('/:id', async (req, res) => {
  try {
    const { status, replySent } = req.body
    
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { status, replySent },
      { new: true, runValidators: true }
    )

    if (!contact) {
      return res.status(404).json({ error: 'Contact message not found' })
    }

    res.json({
      success: true,
      contact
    })
  } catch (error) {
    console.error('❌ Update contact error:', error)
    res.status(500).json({
      error: 'Failed to update contact',
      ...(process.env.NODE_ENV === 'development' && { details: error.message })
    })
  }
})

module.exports = router
