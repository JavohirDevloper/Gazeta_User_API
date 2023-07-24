const express = require("express");
const httpValidator = require("../../shared/http-validator");
const { postDescSchema, patchDescSchema } = require("./_schemas");
const showDesc = require("./show-desc");
const editDesc = require("./edit-desc");
const addDesc = require("./add-desc");
const removeDesc = require("./remove-desc");
/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const postDesc = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, postDescSchema);

    const result = await addDesc(req.body);

    res.status(201).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const patchDesc = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, patchDescSchema);

    const result = await editDesc({ id: req.user.id, ...req.body });

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const getDesc = async (req, res, next) => {
  try {
    const result = await showDesc({ id: req.user.id });

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const deleteDesc = async (req, res, next) => {
  try {
    const result = await removeDesc({ id: req.user.id });

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  postDesc,
  patchDesc,
  getDesc,
  deleteDesc,
};
