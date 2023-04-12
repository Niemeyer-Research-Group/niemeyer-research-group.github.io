import type { Discovery } from "../lib/models/Discovery";

export const Discoveries: Discovery[] = [
    {
        contribution: "We can significantly accelerate integration of chemical kinetics by providing some system knowledge to the algorithm and using efficient sparse linear algebra operations.",
        detail: "Implemented in the open-source library Cantera, benefits appear for even very small models, and we see performance gains of up to 1000 times for large models.",
        pubs: [ "generalized-preconditioning" ],
        tags: [ "ODEs", "chemical kinetics", "linear algebra", "Cantera", "integrators" ],
    },

    {
        contribution: "A human- and machine-readable format allows us to easily describe measurements from fundamental experiments in combustion.",
        detail: "The ChemKED format allows describing fundamental experiments in combustion in a human- and machine-readable way, including descriptions of uncertainty.",
        pubs: [ "chemked", "model-parameter-discrepancy" ],
        tags: [ "ChemKED", "parameter databases", "experimental measurements" ],
    },
    {
        contribution: "Advancing computations inside domains of time and space dependence can improve performance by reducing network communication.",
        detail: "Getting a performance benefit in heterogeneous combinations of CPU and GPU systems depends strongly on configuration details and you can see drops in performance instead.",
        pubs: [ "swept-two-dimensional", "swept-heterogeneous", "GPU-swept-rule-1D", ],
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
        contribution: "Predicting the amount of carbon taken up by the ocean requires accurately capturing the interactins between ocean turbulence and biogeochemistry.",
        detail: "Simulating the interaction between Langmuir turbulence and ocean biogeochemistry requires applying model reduction methods from combustion.",
        pubs: [ "langmuir-carbonate" ],
        tags: [ "biogeochemistry", "ocean", "turbulence", ]
    },
    {
        contribution: "Appropriately chosen integration algorithms can allow GPUs to efficiently integrate stiff chemistry needed in reacting flow simulations.",
        detail: "Particular algorithms parallelize more efficiently on GPUs.",
        pubs: [ "moderately-stiff-GPU", "stiff-GPU-integrators" ],
        tags: ["GPUs", "ODEs", "chemical kinetics", "integrators" ]
    },
    {
        contribution: "Large chemical kinetic models can be automatically reduced using a strategy with multiple reduction stages.",
        detail: "We can significantly reduce the size and complexity of detailed kinetic models, but only so far, before removing components introduces unacceptable error.",
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
