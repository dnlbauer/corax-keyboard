module.exports = {
    params: {
        designator: 'Battery',
        RAW: { type: 'net', value: 'RAW' },
        GND: { type: 'net', value: 'GND' },
    },
    body: p => `
        (module lib:niceview_headers (layer F.Cu) (tedit 648E0265)

        ${p.at /* parametric position */}

        ${''/* pin names */}
        (fp_text user + (at 0 6.3 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user - (at 0 -6.3 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user + (at 0 6.3 ${p.rot + 90}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user - (at 0 -6.3 ${p.rot + 90}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))


        ${''/* pins */}
        (pad 1 thru_hole rect (at 0 7.75 ${p.rot}) (size 1.4 1.4) (drill 0.8) (layers *.Cu *.SilkS *.Mask) ${p.RAW.str})
        (pad 2 thru_hole circle (at 0 -7.75 ${p.rot}) (size 1.4 1.4) (drill 0.8) (layers *.Cu *.SilkS *.Mask) ${p.GND.str})
        )
        `

}

