export const eyeBr = {
    itemSize: "ebr",
    items: [
        ["ebr"]
    ],
    colors: [
        "#32ce2d",
        "#1a9de9", 
        "#e0208a", 
        "#fff", 
        "#fadd9e",
        "#c79c41", 
        "#9e5f24", 
        "#b43930", 
        "#57230f", 
        "#000",
        "#2b2420"
    ],
    format: [
        ["ebr-1", "ebr-2"],
        ["ebr-1", "ebr-2"],
        ["ebr-1", "ebr-2"]
    ],
    formatProps: [
        [ ["border-radius",  "45%"], ["border-radius", "45%"] ],
        [ ["border-radius",  "45% 5% 5% 45%"], ["border-radius", "5% 45% 45% 5%"] ],
        [ ["border-radius",  "5%"], ["border-radius", "5%"] ]
    ],
    angle: [
        ["ebr-1", "ebr-2"],
        ["ebr-1", "ebr-2"],
        ["ebr-1", "ebr-2"],
        ["ebr-1", "ebr-2"]
    ],
    angleProps: [
        [ 
            ["transform",  "translate(-50%, -50%) rotate(-10deg)"], 
            ["transform",  "translate(-50%, -50%) rotate(10deg)"]
        ],
        [ 
            ["transform",  "translate(-50%, -50%)"], 
            ["transform",  "translate(-50%, -50%)"]
        ],
        [ 
            ["transform",  "translate(-50%, -50%) rotate(5deg)"], 
            ["transform",  "translate(-50%, -50%) rotate(-5deg)"]
        ],
        [ 
            ["transform",  "translate(-50%, -50%) rotate(15deg)"], 
            ["transform",  "translate(-50%, -50%) rotate(0deg)"]
        ]
    ]
}

export const eyeB = {
    itemSize: "eye",
    items: [
        ["eb"]
    ],
    colors: [
        "#32ce2d",
        "#1a9de9", 
        "#e0208a", 
        "#bbb", 
        "#fadd9e",
        "#c79c41", 
        "#9e5f24", 
        "#b43930", 
        "#57230f", 
        "#2b2420",
        "#000"
    ],
    format: [
        ["eye-1-1", "eye-1-2"],
        ["eye-1-1", "eye-1-2"],
        ["eye-1-1", "eye-1-2"],
        ["eye-1-1", "eye-1-2"],
        ["eye-1-1", "eye-1-2"],
        ["eye-1-1", "eye-1-2"]
    ],
    formatProps: [
        [ ["border-radius",  "45%"], ["border-radius", "45%"] ],
        [ ["border-radius",  "5%"], ["border-radius", "5%"] ],
        [ ["border-radius",  "45% 5% 5% 45%"], ["border-radius", "5% 45% 45% 5%"] ],
        [ ["border-radius",  "5% 45% 5% 45%"], ["border-radius", "45% 5% 45% 5%"] ],
        [ ["border-radius",  "45% 5% 45% 5%"], ["border-radius", "5% 45% 5% 45%"] ],
        [ ["border-radius",  " 5% 45% 45% 5% "], ["border-radius", "45% 5% 5% 45%"] ]
    ],
    angle: [],
    angleProps: []
}

export const mouth = {
    itemSize: "mouth",
    items: [
        ["mouth"],
        ["mouth-i"]
    ],
    colors: [
        "#e4879b",
        "#e78f66",
        "#c05151",
        "#d64444",
        "#bb4732",  
        "#a34f64",
        "#2b2420",
        "#a13a6a",
        "#a19250", 
        "#4f927e",  
        "#c48a74", 
        "#5372a0",
    ],
    sides: [
        "#eca7a4",
        "#ffc186",
        "#ca7262",
        "#e96655",
        "#c9733a",  
        "#b47269",
        "#921c26", 
        "#c2556d",
        "#a9bb67", 
        "#68abad",  
        "#d6b788", 
        "#7a82c9",
    ],
    format: [
        ["mouth", "mouth-i"],
        ["mouth", "mouth-i"],
        ["mouth", "mouth-i"],
        ["mouth", "mouth-i"]
    ],
    formatProps: [
        [ ["border-radius", "0"], ["display", "none"]  ],
        [ ["border-radius", "0 0 15px 15px"], ["display", "none"]  ],
        [ ["border-radius", "15px 15px 0 0"], ["display", "none"]  ],
        [ ["border-radius", "15px 15px 3px 3px"], ["display", "block"] ]
    ],
    angle: [],
    angleProps: []
}

export const skin = {
    itemSize: "body-front",
    items: [
        ["head-front", "body-front", "arm-2"],
        ["head-side", "body-side", "body-shadow", "arm-1", "arm-side"],
        ["body-shadow-d", "arm-shadow", "ear"],
    ],
    colors: [ 
        "#ffcdc1",
        "#fadd9e",
        "#daab7f",
        "#f19a68",
        "#c79c41",  
        "#af947a",
        "#9e5f24", 
        "#ca7b76",
        "#96d6a1", 
        "#a4c1e2",  
        "#e1e2a4", 
        "#baa4e2",
    ],
    sides: [
        "#eca7a4",
        "#ffc186",
        "#ca7262",
        "#e96655",
        "#c9733a",  
        "#b47269",
        "#921c26", 
        "#c2556d",
        "#a9bb67", 
        "#68abad",  
        "#d6b788", 
        "#7a82c9",
    ],
    shadows: [ 
        "#e4879b",
        "#e78f66",
        "#c05151",
        "#d64444",
        "#bb4732",  
        "#a34f64",
        "#70122e", 
        "#a13a6a",
        "#a19250", 
        "#4f927e",  
        "#c48a74", 
        "#5372a0",
    ],
    format: [],
    formatProps: [],
    angle: [],
    angleProps: []
}