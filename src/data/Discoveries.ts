import type { Discovery } from "../lib/models/Discovery";

export const Discoveries: Discovery[] = [
    {
        contribution: "We can significantly accelerate integration of chemical kinetics by providing some system knowledge to the algorithm and using efficient sparse linear algebra operations.",
        detail: "Implemented in the open-source library Cantera, benefits appear for even very small models, and we see performance gains of up to 1000 times for large models.",
        pubs: [ "generalized-preconditioning" ],
        tags: [ "ODEs", "chemical kinetics", "linear algebra", "Cantera", "integrators" ],
    },

    {
        contribution: "something about ChemKED",
        detail: "",
        pubs: [ "chemked", "model-parameter-discrepancy" ],
        tags: [ "ChemKED", "parameter databases", "experimental measurements" ],
    },
    {
        contribution: "something about swept rule",
        detail: "caveat, getting a performance benefit is very sensitive to the configuration, and easy to get a performance drop instead",
        pubs: [ "GPU-swept-rule-1D", ],
        tags: [ "domain decomposition", "computational fluid dynamics", "GPUs", "swept rule" ]
    },
    {
        contribution: "Vectorized operations are a path to speeding up the integration of chemical kinetics in reacting-flow simulations.",
        detail: "But it requires careful selection of integration algorithm, and may lead to new load-balancing issues.",
        pubs: [ "vectorized-chemistry", "chemistry-vectorization1", "simd-simt-pyjac2" ],
        tags: [ "ODEs", "vectorization", "chemical kinetics", "integrators" ],
    },
    {   
        contribution: "Model reduction methods developed for combustion chemical kinetics can be successfully extended to atmospheric and ocean biogeochemical models.",
        detail: "But algorithms need to be adapted to handle the unique characteristics of different systems, such as non-elementary reactions.",
        pubs: [ "caaba-mecca", "langmuir-carbonate" ],
        tags: [ "model reduction" ],
    },
    {
        contribution: "something about biogeochemistry and ocean turbulence being coupled",
        detail: "",
        pubs: [ "langmuir-carbonate" ],
        tags: [ "biogeochemistry", "ocean", "turbulence", ]
    },
    {
        contribution: "something about GPUs and chemistry",
        detail: "",
        pubs: [ "moderately-stiff-GPU", "stiff-GPU-integrators" ],
        tags: ["GPUs", "ODEs", "chemical kinetics", "integrators" ]
    },
    {
        contribution: "Large chemical kinetic models can be automatically reduced using a strategy with multiple reduction stages.",
        detail: "We can significantly reduce the size and complexity of detailed kinetic models, but only so far.",
        pubs: [ "drgepsa", "graph-search", "multicomponent-reduction", "reduced-gasoline-surrogate", "kerosene-reduction", "butanol-skeletal-models" ],
        tags: [ "model reduction", "chemical kinetics", "algorithms" ]
    },
    {
        contribution: "Electrical arcs in vacuum remelting furnaces can be accurately located using magnetic field sensors paired with a physics-based model.",
        detail: "Vertical misalignment can increase error, which adding multiple sensors can counteract.",
        pubs: [ "aps-analysis" ],
        tags: [ "manufacturing", "vacuum arc remelting", "finite element analysis" ]
    }
];
