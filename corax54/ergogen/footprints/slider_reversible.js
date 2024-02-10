module.exports = {
    params: {
        designator: 'T', // for Toggle
        side: 'F',
        reverse: false,
        from: undefined,
        to: undefined
    },
    body: p => {

        const standard = `
            (module E73:SPDT_C128955 (layer F.Cu) (tstamp 5BF2CC3C)

                ${p.at /* parametric position */}

                ${'' /* footprint reference */}
                (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
                (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))
                                
                ${'' /* extra indicator for the slider */}
                (fp_line (start -1.95 -3.85) (end 1.95 -3.85) (layer Dwgs.User) (width 0.15))
                (fp_line (start 1.95 -3.85) (end 1.95 -1.35) (layer Dwgs.User) (width 0.15))
                (fp_line (start -1.95 -1.35) (end -1.95 -3.85) (layer Dwgs.User) (width 0.15))
                
                ${'' /* bottom cutouts */}
                (pad "" np_thru_hole circle (at 1.5 0) (size 1 1) (drill 0.9) (layers *.Cu *.Mask))
                (pad "" np_thru_hole circle (at -1.5 0) (size 1 1) (drill 0.9) (layers *.Cu *.Mask))

        `

        function pads(side, left, right) {
            return ` 
                ${'' /* outline */}
                (fp_line (start 1.95 -1.35) (end -1.95 -1.35) (layer ${side}.SilkS) (width 0.15))
                (fp_line (start 0 -1.35) (end -3.3 -1.35) (layer ${side}.SilkS) (width 0.15))
                (fp_line (start -3.3 -1.35) (end -3.3 1.5) (layer ${side}.SilkS) (width 0.15))
                (fp_line (start -3.3 1.5) (end 3.3 1.5) (layer ${side}.SilkS) (width 0.15))
                (fp_line (start 3.3 1.5) (end 3.3 -1.35) (layer ${side}.SilkS) (width 0.15))
                (fp_line (start 0 -1.35) (end 3.3 -1.35) (layer ${side}.SilkS) (width 0.15))

                ${'' /* side mounts */}
                (pad "" smd rect (at 3.7 -1.1 ${p.rot}) (size 0.9 0.9) (layers ${side}.Cu ${side}.Paste ${side}.Mask))
                (pad "" smd rect (at 3.7 1.1 ${p.rot}) (size 0.9 0.9) (layers ${side}.Cu ${side}.Paste ${side}.Mask))
                (pad "" smd rect (at -3.7 1.1 ${p.rot}) (size 0.9 0.9) (layers ${side}.Cu ${side}.Paste ${side}.Mask))
                (pad "" smd rect (at -3.7 -1.1 ${p.rot}) (size 0.9 0.9) (layers ${side}.Cu ${side}.Paste ${side}.Mask))

                ${'' /* pins */}
                (pad 1 smd rect (at ${right}2.25 2.075 ${p.rot}) (size 0.9 1.25) (layers ${side}.Cu ${side}.Paste ${side}.Mask) ${p.from.str})
                (pad 2 smd rect (at ${left}0.75 2.075 ${p.rot}) (size 0.9 1.25) (layers ${side}.Cu ${side}.Paste ${side}.Mask) ${p.to.str})
                (pad 3 smd rect (at ${left}2.25 2.075 ${p.rot}) (size 0.9 1.25) (layers ${side}.Cu ${side}.Paste ${side}.Mask))
            `
        }

        const left = p.side == 'F' ? '-' : ''
        const right = p.side == 'F' ? '' : '-'
        if (p.reverse) {
            return `
                ${standard}
                ${pads(p.side, left, right)}
                ${pads(p.side == 'F' ? 'B' : 'F', right, left)}
                )`
        } else {
            return `
                ${standard}
                ${pads(p.side, left, right)}
                )`
        }
    }
}