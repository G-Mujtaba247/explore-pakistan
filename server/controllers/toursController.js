import Tour from "../models/toursModel.js";

export const getAllTours = async (req, res) => {
  const authUser = req.user;
  const tours = await Tour.find({}).sort({ updatedAt: -1 });
  return res.send({ status: true, user: authUser, tours });
};

export const createTours = async (req, res) => {
  const tours = req.body;
  if (!tours.file || !tours.title || !tours.description) {
    return res.send({ status: false, message: "Form fields are required" });
  }

  try {
    const result = await Tour.create(tours);
    if (result) {
      return res.send({ status: true, message: "Tour added successfully" });
    } else {
      return res.send({ status: false, message: "Tour isn't added" });
    }
  } catch (error) {
    console.log(`Something went wrong: \n ${error}`)
  }
};

export const deleteTours = async (req, res) => {
  const id = req.params.id
  if (id) {
    try {
      const ok = await Tour.findByIdAndDelete({ _id: id });
      if (ok) {
        res.send({ status: true, message: "Tour deleted successfully" })
      } else {
        res.send({ status: true, message: "Tour is not found or action perform" })
      }
    } catch (error) {
      console.log(`Error in delete fn(): \n ${error}`)
    }
  } else {
    res.send({ status: true, message: "Tour ID is not found" })
  }
};

export const detailTour = async (req, res) => {
  const id = req.params.id;

  try {
    const tour = await Tour.findById({ _id: id });
    if (tour) {
      return res.send({ status: true, tour });
    } else {
      console.log("Tour not found")
      return res.send({ status: false, message: "Tour not found" });
    }
  } catch (error) {
    console.log(`Something went wrong: \n ${error}`)
  }
};

export const updateTour = async (req, res) => {
  const id = req.params.id
  const note = req.body

  try {
    const ok = await Tour.findByIdAndUpdate({ _id: id }, note);
    if (ok) {
      return res.send({ status: true, message: "Tour updated successfully" });
    } else {
      return res.send({ status: false, message: "Failed to update Tour" });
    }
  } catch (error) {
    console.log(`Something went wrong: \n ${error}`)
  }
}