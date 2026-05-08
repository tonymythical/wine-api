import * as wineService from "../services/wine.service.js";

export const getAll = (req, res) => {
  const wines = wineService.getAll();

  res.status(200).json({
    message: "Wines retrieved successfully.",
    data: wines,
  });
};

export const getById = (req, res) => {
  const id = Number(req.params.id);

  const wine = wineService.getById(id);

  if (!wine) {
    return res.status(404).json({
      message: `Wine with id ${id} not found.`,
      data: null,
    });
  }

  res.status(200).json({
    message: "Wine found.",
    data: wine,
  });
};

export const create = (req, res) => {
  const { name, year } = req.body;

  if (!name || !year) {
    return res.status(400).json({
      message: "Validation failed: name and year are required",
      data: null,
    });
  }

  const newWine = wineService.create({ name, year });

  res.status(201).json({
    message: "Wine created successfully",
    data: newWine,
  });
};

export const update = (req, res) => {
  const id = parseInt(req.params.id);
  const { name, year } = req.body;

  if (!name || !year) {
    return res
      .status(400)
      .json({ message: "Name and year are required", data: null });
  }

  const updatedWine = wineService.update(id, { name, year });

  if (!updatedWine) {
    return res.status(404).json({ message: "Wine not found", data: null });
  }

  res.status(200).json({ message: "Wine updated", data: updatedWine });
};

export const remove = (req, res) => {
    const id = parseInt(req.params.id);
    const deleted = wineService.remove(id);
    
    if (!deleted) {
        return res.status(404).json({ message: "Wine not found", data: null });
    }
    res.status(200).json({ message: "Wine deleted successfully", data: null });
};