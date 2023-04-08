import asyncHandler from "express-async-handler"
import Contact from "../models/contactModel.js"
// @desc Get all contacts
// @route GET api/contacts
// @access public

const getContacts=asyncHandler(async (req,res)=>{
    const contacts = await Contact.find()
    res.status(200).json(contacts)
})
 
// @desc Create new contacts
// @route POST api/contacts
// @access public

const createContact=asyncHandler(async (req,res)=>{
    console.log(`The requested body is : `,req.body)
    const {name,age,mobileno}=req.body
    if(!name||!age||!mobileno){
        res.status(404)
        throw new Error("All Fields are mandatory !")
    }
    const contact = await Contact.create({
        name,
        age,
        mobileno
    })
    res.status(200).json(contact)
})

// @desc Get contact
// @route GET api/contacts/:id
// @access public

const getContact=asyncHandler(async (req,res)=>{
    const contact = await Contact.findById(req.params.id)
    if(!contact){
        res.status(404)
        throw new Error("Contact Not Found !")
    }
    res.status(200).json(contact)
})

// @desc Update contacts
// @route PUT api/contacts/:id
// @access public

const updateContact=asyncHandler(async (req,res)=>{
    const contact = await Contact.findById(req.params.id)
    if(!contact){
        res.status(404)
        throw new Error("Contact Not Found !")
    }
    const updatedContact=await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    )
    res.status(200).json(updatedContact)
})

// @desc Delete contacts
// @route DELETE api/contacts/:id
// @access public

const deleteContact=asyncHandler(async (req,res)=>{
    const contact = await Contact.findById(req.params.id)
    if(!contact){
        res.status(404)
        throw new Error("Contact Not Found !")
    }
    await Contact.remove()
    res.status(200).json(contact)
})

export {getContacts,createContact,getContact,updateContact,deleteContact}
