module.exports = {
  params: {
    class: "MP",
    size: 4.0,
    drill: 2.2
  },
  body: (p) => {
    return `
    (module Hole (layer F.Cu) (tedit 5F7666C1)
      ${p.at /* parametric position */}
      (fp_text reference "${p.ref}" (at 0 0.5) (layer F.SilkS) ${p.ref_hide}
        (effects (font (size 1 1) (thickness 0.15)))
      )

      (pad "" thru_hole circle (at 0 0) (size ${p.size} ${p.size}) (drill ${p.drill}) (layers *.Cu *.Mask) (tstamp 75b224f0-3010-4e8c-bf32-f95a770c96d9))
    )
    `;
  },
};
