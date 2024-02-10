module.exports = {
    params: {
        designator: 'J',
        side: 'F',
        from: undefined,
        to: undefined
    },
    body: p => `
        (module lib:Jumper (layer F.Cu) (tedit 5E1ADAC2)
        ${p.at /* parametric position */} 

        ${'' /* footprint reference */}        
        (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_text value Jumper (at 0 -7.3) (layer F.Fab) (effects (font (size 1 1) (thickness 0.15))))

        ${'' /* pins */}
       
        (pad 1 smd custom (at 0 -0.508 ${p.rot}) (size 0.1 0.1) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask)
        ${p.to.str} (clearance 0.1) (zone_connect 0) (options (clearance outline) (anchor rect))
        (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0))))
    
        (pad 2 smd custom (at 0 0.508 ${p.rot}) (size 1.2 0.5) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask)
        ${p.from.str} (clearance 0.1) (zone_connect 0) (options (clearance outline) (anchor rect))
        (primitives (gr_poly (pts (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)) (width 0))))

        )
    `
}
