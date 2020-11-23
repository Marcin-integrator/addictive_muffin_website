"use strict";

$(".content > img").click(openModal);
$(".close").click(closeModal);

$(".prev").click(minusSlides);
$(".next").click(plusSlides);

// Open the Modal
function openModal() {
  $("#myModal").css("display", "block");
}

// Close the Modal
function closeModal() {
  $("#myModal").css("display", "none");
  $(".current > img").remove();
}

// Next/previous controls
function plusSlides() {
  let len = $(".show").length;
  let x = $(".current > img").attr("id");
  let ide = parseInt(x.split("_")[1]);
  if (ide === len) {
    $(".numbertext").text(` 1 / ${len} `);
    $(".current > img").replaceWith($(`#id_${1}`).clone());
  } else {
    $(".numbertext").text(` ${ide + 1} / ${len} `);
    $(".current > img").replaceWith($(`#id_${ide + 1}`).clone());
  }
}

function minusSlides() {
  let len = $(".show").length;
  let x = $(".current > img").attr("id");
  let ide = parseInt(x.split("_")[1]);
  if (ide === 1) {
    $(".numbertext").text(` ${len} / ${len} `);
    $(".current > img").replaceWith($(`#id_${len}`).clone());
  } else {
    $(".numbertext").text(` ${ide - 1} / ${len} `);
    $(".current > img").replaceWith($(`#id_${ide - 1}`).clone());
  }
}

// Display selected slide
function currentSlide(n) {
  let len = $(".show").length;
  let ide = n.target.id;
  let curr = parseInt(ide.split("_")[1]);
  $(".numbertext").text(` ${curr} / ${len} `);
  $(`#${n.target.id}`).clone().appendTo(".current");
}

$(".content > img").each(function () {
  $(this).bind("click", currentSlide);
});
