import type { Discovery } from "../lib/models/Discovery";

export const Discoveries: Discovery[] = [
    {
        contribution: "We can predict complex properties of liquid aviation fuels, including sustainable bio-based alternative fuels, using machine learning methods.",
        detail: "But this requires carefully selecting features when training the models.",
        pubs: [ "f2ft-fuel-blends", "feature-selection", "FTIR-LTC", "RON-FTIR" ],
        tags: [ "feedstock to function", "machine learning", "sustainable aviation fuels" ],
    },
    {
        contribution: "By incorporating key components in models, we can capture the ignition behavior of live fuels in simulations of wildfire.",
        detail: "Models for live vegetative fuels (like trees and shrubs) need to include smaller components like sugars, lipids, proteins, phenols, and minerals, and not just moisture content.",
        pubs: [ "live-fuel-ignition", "douglas-fir-reduced-model", "single-domain-buoyant-plumes" ],
        tags: [ "live fuels", "wildfire" ],
    },
    {
        contribution: "We can achieve exascale performance in Monte Carlo neutron transport solvers written in Python, using just-in-time compilers.",
        detail: "Unlike most traditional compiled codes, this approach allows portable performance on modern architectures.",
        pubs: [ "mcdc-joss", "mcdc-development", "mcdc-tnt", "monte-carlo-summit", "mcdc-parallelism" ],
        tags: [ "Monte Carlo", "neutron transport", "nuclear reactors", "exascale" ],
    },
    {
        contribution: "We can predict ignition and propagation of smoldering combustion, including effects of composition and environmental conditions, in woody fuels by representing the amounts of major components.",
        detail: "Varying fuel composition in terms of cellulose, hemicellulose, and lignin proportions can noticeably change smoldering behavior, including critical moisture content.",
        pubs: [ "lignin-smouldering", "smoldering-mixtures", "smoldering-exp-comp", "smoldering-mixtures-poci" ],
        tags: [ "smoldering", "wildfire" ],
    },
    {
        contribution: "How we model molecular diffusion in turbulent flames can impact our predictions of turbulent flame speed and structure.",
        detail: "This is true even for larger hydrocarbon fuels; fortunately, our efficient algorithm for implementing the accurate multicomponent diffusion model enables its use.",
        pubs: [ "multicomponent-diffusion-method", "multicomponent-diffusion-flame", "diffusion-enstrophy-flame" ],
        tags: [ "diffusion", "turbulent flames", "numerical methods", "direct numerical simulation" ],
    },
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
        pubs: [ "caaba-mecca", "langmuir-carbonate", "bfm17" ],
        tags: [ "model reduction", "biogeochemistry", "atmospheric chemistry" ],
    },
    {
        contribution: "Predicting the amount of carbon taken up by the ocean requires accurately capturing the interactions between ocean turbulence and biogeochemistry.",
        detail: "Simulating the interaction between Langmuir turbulence and ocean biogeochemistry requires applying model reduction methods from combustion.",
        pubs: [ "langmuir-carbonate", "bgc-parameter-estimation", "bfm17" ],
        tags: [ "biogeochemistry", "ocean", "turbulence", ]
    },
    {
        contribution: "Appropriately chosen integration algorithms can allow GPUs to efficiently integrate stiff chemistry needed in reacting flow simulations.",
        detail: "Particular algorithms parallelize more efficiently on GPUs.",
        pubs: [ "moderately-stiff-GPU", "stiff-GPU-integrators", "aas-integration-methods" ],
        tags: ["GPUs", "ODEs", "chemical kinetics", "integrators" ]
    },
    {
        contribution: "Large chemical kinetic models can be automatically reduced using a strategy with multiple reduction stages.",
        detail: "We can significantly reduce the size and complexity of detailed kinetic models, but only so far, before removing components introduces unacceptable error.",
        pubs: [ "drgepsa", "graph-search", "multicomponent-reduction", "reduced-gasoline-surrogate", "kerosene-reduction", "butanol-skeletal-models", "pymars", "douglas-fir-reduced-model" ],
        tags: [ "model reduction", "chemical kinetics", "reduction algorithms" ]
    },
    {
        contribution: "Electrical arcs in vacuum remelting furnaces can be accurately located using magnetic field sensors paired with a physics-based model.",
        detail: "Vertical misalignment can increase error, which adding multiple sensors can counteract.",
        pubs: [ "aps-analysis" ],
        tags: [ "manufacturing", "vacuum arc remelting", "finite element analysis" ]
    }
];
