// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Bain Liao
// Created on: Apr 2025
// This file contains the JS functions for index.html

"use scrict"

function determineTypeOfTriangle() {
  // input
  const lengthA = parseInt(document.getElementById('length-a').value)
  const lengthB = parseInt(document.getElementById('length-b').value)
  const lengthC = parseInt(document.getElementById('length-c').value)

  // using the cosine law
  const angleA = Math.acos((lengthB**2 + lengthC**2 - lengthA**2) / (2 * lengthB * lengthC)) * (180/Math.PI)
  const angleB = Math.acos((lengthC**2 + lengthA**2 - lengthB**2) / (2 * lengthC * lengthA)) * (180/Math.PI)
  const angleC = Math.acos((lengthA**2 + lengthB**2 - lengthC**2) / (2 * lengthA * lengthB)) * (180/Math.PI)

  const sumOfAngles = Number((angleA).toFixed(2)) + Number((angleB).toFixed(2)) + Number((angleC).toFixed(2))

  // process
  if (sumOfAngles != 180) {
    document.getElementById('result').innerHTML =
      '<p>Your shape is not a triangle</p>'
  }

}
