import express from "express";
import {getContacts,getContact,updateContact,createContact,deleteContact} from "../controllers/contactControllers.js";
const router = express.Router()

router.route("/").get(getContacts).post(createContact)

router.route("/:id").get(getContact).put(updateContact).delete(deleteContact)

export default router
