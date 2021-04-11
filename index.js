import { eyeBr, eyeB, skin, mouth } from "./bodyStyles.js";

function activate() {
    const id = $(this).attr("id");
    const numId = Number(id.slice(3))-1;
    const name = $(this).attr("name");

    style = styleOptions[numId];
    loadPickers();

    $(".tab > div").removeClass("tab-active");
    $(`#${id} > div`).addClass("tab-active");
    $("#op-title").text(`Choose your ${name}`);
}

function getCssValue(prop, name) {
    var cssValue = $(name).css(prop);
    return Number(cssValue.slice(0, -2));
}

function increase(e) {
    let prop = e.data.prop; 
    let name = "."+e.data.name;
    let max = prop === "width" ? 65 : 35;

    let w = getCssValue(prop, name) + 2;
    console.log(prop, w)
    if (w < max) {
        $(`${name}`).css(prop, `${w}px`);
    }
}

function decrease(e) {
    let prop = e.data.prop; 
    let name = "."+e.data.name;
    let min = style.itemSize === "eye" ? 14 : 0

    var w = getCssValue(prop, name) - 2;
    if (w > min) {
        $(`${name}`).css(prop, `${w}px`);
    }
}

function changeColor(e) {
    const color = e.data.color;

    if (style.items.length > 1) {
        const idx = style.colors.findIndex((c) => c === color);

        style.items[0].map((i) => {
            $(`.${i}`).css("background", color);
        });
        style.items[1].map((i) => {
            $(`.${i}`).css("background", style.sides[idx]);
        });
        if (style.items.length > 2) {
            style.items[2].map((i) => {
                $(`.${i}`).css("background", style.shadows[idx]);
            });
        }

    } else {
        style.items.map((i) => {
            $(`.${i}`).css("background", color);
        });
    }
}

function changeFormat() {
    const idx = $(this).attr("id");
    style.format[idx].map((item, i) => {
        $(`.${item}`).css(style.formatProps[idx][i][0], style.formatProps[idx][i][1]);
    })
}

function changeAngle() {
    const idx = $(this).attr("id").slice(2);
    style.angle[idx].map((item, i) => {
        $(`.${item}`).css(style.angleProps[idx][i][0], style.angleProps[idx][i][1]);
    })
}

function loadPickers() {
    if (style.angle.length === 0) {
        $("#pick-angle").remove()
    } else if ($("#pick-angle").attr("id") === undefined) {
        $("#pick-format").after(
            '<label id="pick-angle">Angle: </label>'
        )
    }

    if (style.format.length === 0) {
        $("#pick-format").remove()
    } else if ($("#pick-format").attr("id") === undefined) {
        $("#pick-color").after(
            '<label id="pick-format">Format: </label>'
        )
    }

    if (style.itemSize === "body-front") {
        console.log("yep")
        $(".size-options").css("display", "none")
    } else {
        console.log("nop")
        $(".size-options").css("display", "block")
    }

    $(".pick-color").remove()
    style.colors.map((color) => {  
        $("#pick-color").after(
            `<div id='${color.slice(1)}' class="pick-color"></div>`
        );
        $(`#${color.slice(1)}`).css("background", color).on("click", { color }, changeColor);
    })

    $(".pick-format").remove()
    style.format.map((v, idx, a) => {  
        let i = a.length - 1 - idx;
        $("#pick-format").after(
            `<div id='${i}' class="pick-color"></div>`
        );
        $(`#${i}`).text(i).on("click", changeFormat);
    })

    $(".pick-angle").remove()
    style.angle.map((c, idx, a) => { 
        let i = a.length - 1 - idx;
        $("#pick-angle").after(
            `<div id='a-${i}' class="pick-color"></div>`
        );
        $(`#a-${i}`).text(i).on("click", changeAngle);
    })

    $('.change-size').off('click');
    $("#i-w").on("click", {prop: "width", name: style.itemSize}, increase);
    $("#d-w").on("click", {prop: "width", name: style.itemSize}, decrease);
    $("#i-h").on("click", {prop: "height", name: style.itemSize}, increase);
    $("#d-h").on("click", {prop: "height", name: style.itemSize}, decrease);
}

function download() {
    domtoimage.toJpeg(document.getElementById("avatar"))
        .then(dataUrl => {
            var link = document.createElement('a');
            link.download = 'my-caixote.jpeg';
            link.href = dataUrl;
            link.click();
        })
}

var styleOptions = [eyeBr, eyeB, skin, mouth]
var style = styleOptions[0];

$(window).on('load', () => {
    $(".tab").on("click", activate);
    $("#download").on("click", download);
    loadPickers();
});



