module.exports = {
    params: {
        text: '',
        side: 'F',
        knockout: false,
        fontsize: 0.8
    },
    body: p => `
        (module lib:text (layer F.Cu) (tedit 648E0265)

        ${p.at /* parametric position */}

        (fp_text user "${p.text}" (at 0 0 ${p.rot + 90}) (layer ${p.side}.SilkS ${p.knockout ? "knockout" : ""}) (effects (font (size ${p.fontsize} ${p.fontsize}) (thickness 0.15)) ${p.side === 'F' ? "" : "(justify mirror)"} ))

        )
        `

}

