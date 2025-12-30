import Contact from "../models/contactModel.js";

// Admin Controllers
export const getContactDetail = async (req, res) => {
    try {
        const contact = await Contact.find({}).sort({ createdAt: -1 });
        return res.send({ status: true, message: "Contact details fetched", contact });
    } catch (error) {
        console.log("Error: ", error);
        return res.status(500).send({ status: false, message: "Server error" });
    }
}

export const createOrUpdateContact = async (req, res) => {
    const { id } = req.params;
    const { phone, email, address, map } = req.body;

    try {
        // If ID is provided, update existing contact
        if (id) {
            const existingContact = await Contact.findById({ _id: id });
            if (existingContact) {
                const updatedContact = await Contact.findByIdAndUpdate(
                    { _id: id },
                    { phone, email, address, map },
                    { new: true }
                );
                if (updatedContact) {
                    return res.send({ status: true, message: "Contact updated successfully", updatedContact });
                } else {
                    return res.send({ status: false, message: "Contact not found" });
                }
            }
        }

        // Create new contact entry
        if (!phone || !email || !address) {
            return res.send({ status: false, message: "Phone, email, and address are required" });
        }

        const newContact = await Contact.create({
            phone,
            email,
            address,
            map
        });

        if (newContact) {
            return res.send({ status: true, message: "Contact created successfully", newContact });
        } else {
            return res.send({ status: false, message: "Failed to create contact" });
        }
    } catch (error) {
        console.log("Error: ", error);
        return res.status(500).send({ status: false, message: "Server error" });
    }
}

// Website Controllers - for displaying contact info on user-facing site
export const getContactForWebsite = async (req, res) => {
    try {
        const contact = await Contact.find({}).sort({ createdAt: -1 }).limit(1);
        if (contact.length > 0) {
            return res.send({ status: true, message: "Contact details fetched", contact: contact[0] });
        } else {
            return res.send({ status: false, message: "No contact information found" });
        }
    } catch (error) {
        console.log("Error: ", error);
        return res.status(500).send({ status: false, message: "Server error" });
    }
}
