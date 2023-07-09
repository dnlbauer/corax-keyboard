module.exports = {
    params: {
        text: '',
        side: 'F',
        knockout: false
    },
    body: p => `
        (module lib:text (layer F.Cu) (tedit 648E0265)

        ${p.at /* parametric position */}

        (fp_text user "${p.text}" (at 0 0 ${p.rot + 90}) (layer ${p.side}.SilkS ${p.knockout ? "knockout" : ""}) (effects (font (size 0.8 0.8) (thickness 0.15)) ${p.side === 'F' ? "" : "(justify mirror)"} ))

        )
        `

}

