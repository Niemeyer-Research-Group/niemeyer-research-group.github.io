import type Software from "../lib/models/Software";

/*
    Software the group develops or contributes to.

    `people` uses the same "@id" convention as paper authors in Pubs.ts, and
    `pubs` refers to entries there by id.

    `badges` are the projects' own README badges, referenced rather than
    recreated, so DOIs and released versions stay current without being
    restated here. Only stable badges are listed — deliberately not CI or
    coverage, which would report other projects' build health on this page.

    `license` stays a plain SPDX identifier; SoftwareCard turns it into the
    matching shields.io badge, so it only has to be written once per entry.
*/
export const Software: Software[] = [
    {
        id: "pymars",
        name: "pyMARS",
        description:
            "Automatically reduces large chemical kinetic models into smaller ones that stay accurate over the conditions you care about, using established skeletal reduction methods.",
        repo: "Niemeyer-Research-Group/pyMARS",
        url: "https://niemeyer-research-group.github.io/pyMARS/",
        logo: "/images/software/pymars-logo.png",
        people: ["@phillip-mestas", "@parker-clayton", "@ken"],
        pubs: ["pymars"],
        license: "MIT",
        badges: [
            {
                alt: "JOSS DOI",
                image: "https://joss.theoj.org/papers/10.21105/joss.01543/status.svg",
                url: "https://doi.org/10.21105/joss.01543",
            },
            {
                alt: "PyPI version",
                image: "https://img.shields.io/pypi/v/nrg-pymars",
                url: "https://pypi.org/project/nrg-pymars/",
            },
        ],
    },
    {
        id: "mcdc",
        name: "MC/DC",
        description:
            "Monte Carlo / Dynamic Code: a community Python package for fully transient neutron transport that performs efficiently on high-performance-computing systems through just-in-time compilation, while staying quick to prototype new methods. Our group contributes to its development.",
        repo: "mcdc-project/mcdc",
        url: "https://mcdc.readthedocs.io/en/latest/",
        logo: "/images/software/mcdc-logo.svg",
        people: ["@jpmorgan", "@massimo-larsen", "@todd-palmer", "@ken"],
        pubs: ["mcdc-joss", "mcdc-development", "mcdc-tnt", "mcdc-parallelism"],
        license: "BSD-3-Clause",
        badges: [
            {
                alt: "JOSS DOI",
                image: "https://joss.theoj.org/papers/10.21105/joss.06415/status.svg",
                url: "https://doi.org/10.21105/joss.06415",
            },
            {
                alt: "PyPI version",
                image: "https://img.shields.io/pypi/v/mcdc.svg",
                url: "https://pypi.org/project/mcdc/",
            },
        ],
    },
    {
        id: "pyked",
        name: "PyKED",
        description:
            "Python interface to the ChemKED format, for validating and working with data files describing fundamental combustion experiments.",
        repo: "pr-omethe-us/PyKED",
        url: "https://pr-omethe-us.github.io/PyKED/",
        logo: "/images/software/pyked-logo.svg",
        people: ["@bryan-weber", "@ken"],
        pubs: ["chemked", "model-parameter-discrepancy"],
        license: "BSD-3-Clause",
        badges: [
            {
                alt: "DOI",
                image: "https://zenodo.org/badge/66023863.svg",
                url: "https://zenodo.org/badge/latestdoi/66023863",
            },
            {
                alt: "PyPI version",
                image: "https://img.shields.io/pypi/v/pyked.svg",
                url: "https://pypi.org/project/pyked/",
            },
        ],
    },
    {
        id: "pyteck",
        name: "PyTeCK",
        description:
            "Automatically evaluates chemical kinetic models against experimental data, so a model's performance can be measured reproducibly rather than by hand.",
        repo: "pr-omethe-us/PyTeCK",
        url: "https://pr-omethe-us.github.io/PyTeCK/",
        logo: "/images/software/pyteck-model-data-square-auto.svg",
        people: ["@ken"],
        pubs: ["model-parameter-discrepancy"],
        license: "MIT",
        badges: [
            {
                alt: "DOI",
                image: "https://zenodo.org/badge/53542212.svg",
                url: "https://zenodo.org/badge/latestdoi/53542212",
            },
            {
                alt: "PyPI version",
                image: "https://img.shields.io/pypi/v/pyteck",
                url: "https://pypi.org/project/pyteck/",
            },
        ],
    },
    {
        id: "cantera",
        name: "Cantera",
        description:
            "A widely used open-source toolkit for problems involving chemical kinetics, thermodynamics, and transport. The group has contributes to its development and maintenance.",
        repo: "Cantera/cantera",
        url: "https://cantera.org",
        logo: "/images/software/cantera-logo.png",
        people: ["@anthony-walker", "@ken", "@rwest", "@bryan-weber", "@ray-speth"],
        license: "BSD-3-Clause",
        badges: [
            {
                alt: "DOI",
                image: "https://zenodo.org/badge/DOI/10.5281/zenodo.14455267.svg",
                url: "https://doi.org/10.5281/zenodo.14455267",
            },
            {
                alt: "PyPI version",
                image: "https://img.shields.io/pypi/v/cantera.svg",
                url: "https://pypi.org/project/cantera/",
            },
        ],
    },
    {
        id: "pyjac",
        name: "pyJac",
        description:
            "Generates analytical Jacobian matrices in C and CUDA for chemical kinetics ODE systems, which integrate faster and more accurately than the finite-difference approximations they replace.",
        repo: "SLACKHA/pyJac",
        url: "https://slackha.github.io/pyJac/",
        people: ["@ken", "@nick-curtis", "@cjsung"],
        pubs: ["pyjac", "simd-simt-pyjac2"],
        license: "MIT",
        badges: [
            {
                alt: "DOI",
                image: "https://zenodo.org/badge/19829533.svg",
                url: "https://zenodo.org/badge/latestdoi/19829533",
            },
            {
                alt: "PyPI version",
                image: "https://badge.fury.io/py/pyJac.svg",
                url: "https://pypi.org/project/pyjac/",
            },
        ],
    },
    {
        id: "chemked-database",
        name: "ChemKED database",
        description:
            "A collection of ChemKED files capturing fundamental combustion experiments, like autoignition and flame speed measurements, in a human- and machine-readable form.",
        kind: "data",
        repo: "pr-omethe-us/ChemKED-database",
        logo: "/images/software/prometheus-logo.svg",
        people: ["@bryan-weber", "@rwest", "@ken"],
        pubs: ["chemked", "model-parameter-discrepancy"],
        license: "CC-BY-4.0",
    },
    {
        id: "urssi-school",
        name: "URSSI School Materials",
        description:
            "Lessons and curriculum from the URSSI research software engineering schools, covering the practices behind sustainable scientific software.",
        kind: "materials",
        repo: "si2-urssi/urssi-school-materials",
        logo: "/images/software/urssi-logo.png",
        url: "https://si2-urssi.github.io/urssi-school-materials/",
        people: ["@ken"],
        license: "CC-BY-4.0",
        badges: [
            {
                alt: "DOI",
                image: "https://zenodo.org/badge/1310334926.svg",
                url: "https://doi.org/10.5281/zenodo.21693650",
            }
        ],
    },
    {
        id: "computational-thermo",
        name: "Computational Thermodynamics",
        description:
            "Lessons and example problems in thermodynamics, in the format of Jupyter notebooks, developed to supplement the graduate course ME 540, Intermediate Thermodynamics.",
        kind: "materials",
        repo: "kyleniemeyer/computational-thermo",
        logo: "/images/classes/intermediate-thermo.png",
        url: "https://kyleniemeyer.github.io/computational-thermo/",
        people: ["@ken"],
        license: "CC-BY-4.0",
        badges: [
            {
                alt: "DOI",
                image: "https://zenodo.org/badge/252040266.svg",
                url: "https://doi.org/10.5281/zenodo.4017942",
            }
        ],
    },
    {
        id: "rocket-propulsion",
        name: "Rocket Propulsion notes",
        description:
            "Online book of supplementary notes on rocket propulsion for the course AAE 462/562: Rocket Propulsion.",
        kind: "materials",
        repo: "kyleniemeyer/rocket-propulsion",
        logo: "/images/classes/rocket-propulsion.png",
        url: "https://kyleniemeyer.github.io/rocket-propulsion/",
        people: ["@ken"],
        license: "CC-BY-4.0",
        badges: [
            {
                alt: "DOI",
                image: "https://zenodo.org/badge/326501893.svg",
                url: "https://doi.org/10.5281/zenodo.21684326",
            }
        ],
    },
    {
        id: "numerical-methods",
        name: "Mechanical Engineering Methods notes",
        description:
            "Material and example problems in numerical methods for engineering, in the format of Jupyter notebooks, developed to supplement the course ME 373, Mechanical Engineering Methods,",
        kind: "materials",
        repo: "kyleniemeyer/ME373-book",
        logo: "/images/classes/numerical-methods.png",
        url: "https://kyleniemeyer.github.io/ME373-book/",
        people: ["@ken"],
        license: "CC-BY-4.0",
    },
    {
        id: "gas-dynamics",
        name: "Gas Dynamics notes",
        description:
            "Material and example problems on introductory gas dynamics developed to supplement the course ME 461/561, Gas Dynamics.",
        kind: "materials",
        repo: "kyleniemeyer/gas-dynamics-notes",
        logo: "/images/classes/gas-dynamics.png",
        url: "https://kyleniemeyer.github.io/gas-dynamics-notes/",
        people: ["@ken"],
        license: "CC-BY-4.0",
        badges: [
            {
                alt: "DOI",
                image: "https://zenodo.org/badge/297243446.svg",
                url: "https://doi.org/10.5281/zenodo.21684073",
            },
        ],
    },
];