const elementData = {
    "H": {
        "name": "Hydrogen",
        "number": 1,
        "mass": 1.008,
        "category": "nonmetal",
        "state": "gas",
        "block": "s",
        "period": 1,
        "group": 1,
        "electronicConfiguration": "1s¹"
    },
    "He": {
        "name": "Helium",
        "number": 2,
        "mass": 4.0026,
        "category": "noble",
        "state": "gas",
        "block": "s",
        "period": 1,
        "group": 18,
        "electronicConfiguration": "1s²"
    },
    "Li": {
        "name": "Lithium",
        "number": 3,
        "mass": 6.94,
        "category": "metal",
        "state": "solid",
        "block": "s",
        "period": 2,
        "group": 1,
        "electronicConfiguration": "[He] 2s¹"
    },
    "Be": {
        "name": "Beryllium",
        "number": 4,
        "mass": 9.0122,
        "category": "metal",
        "state": "solid",
        "block": "s",
        "period": 2,
        "group": 2,
        "electronicConfiguration": "[He] 2s²"
    },
    "B": {
        "name": "Boron",
        "number": 5,
        "mass": 10.81,
        "category": "metalloid",
        "state": "solid",
        "block": "p",
        "period": 2,
        "group": 13,
        "electronicConfiguration": "[He] 2s² 2p¹"
    },
    "C": {
        "name": "Carbon",
        "number": 6,
        "mass": 12.011,
        "category": "nonmetal",
        "state": "solid",
        "block": "p",
        "period": 2,
        "group": 14,
        "electronicConfiguration": "[He] 2s² 2p²"
    },
    "N": {
        "name": "Nitrogen",
        "number": 7,
        "mass": 14.007,
        "category": "nonmetal",
        "state": "gas",
        "block": "p",
        "period": 2,
        "group": 15,
        "electronicConfiguration": "[He] 2s² 2p³"
    },
    "O": {
        "name": "Oxygen",
        "number": 8,
        "mass": 15.999,
        "category": "nonmetal",
        "state": "gas",
        "block": "p",
        "period": 2,
        "group": 16,
        "electronicConfiguration": "[He] 2s² 2p⁴"
    },
    "F": {
        "name": "Fluorine",
        "number": 9,
        "mass": 18.998,
        "category": "nonmetal",
        "state": "gas",
        "block": "p",
        "period": 2,
        "group": 17,
        "electronicConfiguration": "[He] 2s² 2p⁵"
    },
    "Ne": {
        "name": "Neon",
        "number": 10,
        "mass": 20.18,
        "category": "noble",
        "state": "gas",
        "block": "p",
        "period": 2,
        "group": 18,
        "electronicConfiguration": "[He] 2s² 2p⁶"
    },
    "Na": {
        "name": "Sodium",
        "number": 11,
        "mass": 22.99,
        "category": "metal",
        "state": "solid",
        "block": "s",
        "period": 3,
        "group": 1,
        "electronicConfiguration": "[Ne] 3s¹"
    },
    "Mg": {
        "name": "Magnesium",
        "number": 12,
        "mass": 24.305,
        "category": "metal",
        "state": "solid",
        "block": "s",
        "period": 3,
        "group": 2,
        "electronicConfiguration": "[Ne] 3s²"
    },
    "Al": {
        "name": "Aluminium",
        "number": 13,
        "mass": 26.982,
        "category": "metal",
        "state": "solid",
        "block": "p",
        "period": 3,
        "group": 13,
        "electronicConfiguration": "[Ne] 3s² 3p¹"
    },
    "Si": {
        "name": "Silicon",
        "number": 14,
        "mass": 28.085,
        "category": "metalloid",
        "state": "solid",
        "block": "p",
        "period": 3,
        "group": 14,
        "electronicConfiguration": "[Ne] 3s² 3p²"
    },
    "P": {
        "name": "Phosphorus",
        "number": 15,
        "mass": 30.974,
        "category": "nonmetal",
        "state": "solid",
        "block": "p",
        "period": 3,
        "group": 15,
        "electronicConfiguration": "[Ne] 3s² 3p³"
    },
    "S": {
        "name": "Sulfur",
        "number": 16,
        "mass": 32.06,
        "category": "nonmetal",
        "state": "solid",
        "block": "p",
        "period": 3,
        "group": 16,
        "electronicConfiguration": "[Ne] 3s² 3p⁴"
    },
    "Cl": {
        "name": "Chlorine",
        "number": 17,
        "mass": 35.45,
        "category": "nonmetal",
        "state": "gas",
        "block": "p",
        "period": 3,
        "group": 17,
        "electronicConfiguration": "[Ne] 3s² 3p⁵"
    },
    "Ar": {
        "name": "Argon",
        "number": 18,
        "mass": 39.948,
        "category": "noble",
        "state": "gas",
        "block": "p",
        "period": 3,
        "group": 18,
        "electronicConfiguration": "[Ne] 3s² 3p⁶"
    },
    "K": {
        "name": "Potassium",
        "number": 19,
        "mass": 39.098,
        "category": "metal",
        "state": "solid",
        "block": "s",
        "period": 4,
        "group": 1,
        "electronicConfiguration": "[Ar] 4s¹"
    },
    "Ca": {
        "name": "Calcium",
        "number": 20,
        "mass": 40.078,
        "category": "metal",
        "state": "solid",
        "block": "s",
        "period": 4,
        "group": 2,
        "electronicConfiguration": "[Ar] 4s²"
    },
    "Sc": {
        "name": "Scandium",
        "number": 21,
        "mass": 44.956,
        "category": "metal",
        "state": "solid",
        "block": "d",
        "period": 4,
        "group": 3,
        "electronicConfiguration": "[Ar] 3d¹ 4s²"
    },
    "Ti": {
        "name": "Titanium",
        "number": 22,
        "mass": 47.867,
        "category": "metal",
        "state": "solid",
        "block": "d",
        "period": 4,
        "group": 4,
        "electronicConfiguration": "[Ar] 3d² 4s²"
    },
    "V": {
        "name": "Vanadium",
        "number": 23,
        "mass": 50.942,
        "category": "metal",
        "state": "solid",
        "block": "d",
        "period": 4,
        "group": 5,
        "electronicConfiguration": "[Ar] 3d³ 4s²"
    },
    "Cr": {
        "name": "Chromium",
        "number": 24,
        "mass": 51.996,
        "category": "metal",
        "state": "solid",
        "block": "d",
        "period": 4,
        "group": 6,
        "electronicConfiguration": "[Ar] 3d⁵ 4s¹"
    },
    "Mn": {
        "name": "Manganese",
        "number": 25,
        "mass": 54.938,
        "category": "metal",
        "state": "solid",
        "block": "d",
        "period": 4,
        "group": 7,
        "electronicConfiguration": "[Ar] 3d⁵ 4s²"
    },
    "Fe": {
        "name": "Iron",
        "number": 26,
        "mass": 55.845,
        "category": "metal",
        "state": "solid",
        "block": "d",
        "period": 4,
        "group": 8,
        "electronicConfiguration": "[Ar] 3d⁶ 4s²"
    },
    "Co": {
        "name": "Cobalt",
        "number": 27,
        "mass": 58.933,
        "category": "metal",
        "state": "solid",
        "block": "d",
        "period": 4,
        "group": 9,
        "electronicConfiguration": "[Ar] 3d⁷ 4s²"
    },
    "Ni": {
        "name": "Nickel",
        "number": 28,
        "mass": 58.693,
        "category": "metal",
        "state": "solid",
        "block": "d",
        "period": 4,
        "group": 10,
        "electronicConfiguration": "[Ar] 3d⁸ 4s²"
    },
    "Cu": {
        "name": "Copper",
        "number": 29,
        "mass": 63.546,
        "category": "metal",
        "state": "solid",
        "block": "d",
        "period": 4,
        "group": 11,
        "electronicConfiguration": "[Ar] 3d¹⁰ 4s¹"
    },
    "Zn": {
        "name": "Zinc",
        "number": 30,
        "mass": 65.38,
        "category": "metal",
        "state": "solid",
        "block": "d",
        "period": 4,
        "group": 12,
        "electronicConfiguration": "[Ar] 3d¹⁰ 4s²"
    },
    "Ga": {
        "name": "Gallium",
        "number": 31,
        "mass": 69.723,
        "category": "metal",
        "state": "solid",
        "block": "p",
        "period": 4,
        "group": 13,
        "electronicConfiguration": "[Ar] 3d¹⁰ 4s² 4p¹"
    },
    "Ge": {
        "name": "Germanium",
        "number": 32,
        "mass": 72.63,
        "category": "metalloid",
        "state": "solid",
        "block": "p",
        "period": 4,
        "group": 14,
        "electronicConfiguration": "[Ar] 3d¹⁰ 4s² 4p²"
    },
    "As": {
        "name": "Arsenic",
        "number": 33,
        "mass": 74.922,
        "category": "metalloid",
        "state": "solid",
        "block": "p",
        "period": 4,
        "group": 15,
        "electronicConfiguration": "[Ar] 3d¹⁰ 4s² 4p³"
    },
    "Se": {
        "name": "Selenium",
        "number": 34,
        "mass": 78.971,
        "category": "nonmetal",
        "state": "solid",
        "block": "p",
        "period": 4,
        "group": 16,
        "electronicConfiguration": "[Ar] 3d¹⁰ 4s² 4p⁴"
    },
    "Br": {
        "name": "Bromine",
        "number": 35,
        "mass": 79.904,
        "category": "liquid",
        "state": "liquid",
        "block": "p",
        "period": 4,
        "group": 17,
        "electronicConfiguration": "[Ar] 3d¹⁰ 4s² 4p⁵"
    },
    "Kr": {
        "name": "Krypton",
        "number": 36,
        "mass": 83.798,
        "category": "noble",
        "state": "gas",
        "block": "p",
        "period": 4,
        "group": 18,
        "electronicConfiguration": "[Ar] 3d¹⁰ 4s² 4p⁶"
    },
    "Rb": {
        "name": "Rubidium",
        "number": 37,
        "mass": 85.468,
        "category": "metal",
        "state": "solid",
        "block": "s",
        "period": 5,
        "group": 1,
        "electronicConfiguration": "[Kr] 5s¹"
    },
    "Sr": {
        "name": "Strontium",
        "number": 38,
        "mass": 87.62,
        "category": "metal",
        "state": "solid",
        "block": "s",
        "period": 5,
        "group": 2,
        "electronicConfiguration": "[Kr] 5s²"
    },
    "Y": {
        "name": "Yttrium",
        "number": 39,
        "mass": 88.906,
        "category": "metal",
        "state": "solid",
        "block": "d",
        "period": 5,
        "group": 3,
        "electronicConfiguration": "[Kr] 4d¹ 5s²"
    },
    "Zr": {
        "name": "Zirconium",
        "number": 40,
        "mass": 91.224,
        "category": "metal",
        "state": "solid",
        "block": "d",
        "period": 5,
        "group": 4,
        "electronicConfiguration": "[Kr] 4d² 5s²"
    },
    "Nb": {
        "name": "Niobium",
        "number": 41,
        "mass": 92.906,
        "category": "metal",
        "state": "solid",
        "block": "d",
        "period": 5,
        "group": 5,
        "electronicConfiguration": "[Kr] 4d⁴ 5s¹"
    },
    "Mo": {
        "name": "Molybdenum",
        "number": 42,
        "mass": 95.95,
        "category": "metal",
        "state": "solid",
        "block": "d",
        "period": 5,
        "group": 6,
        "electronicConfiguration": "[Kr] 4d⁵ 5s¹"
    },
    "Tc": {
        "name": "Technetium",
        "number": 43,
        "mass": 98,
        "category": "metal",
        "state": "solid",
        "block": "d",
        "period": 5,
        "group": 7,
        "electronicConfiguration": "[Kr] 4d⁵ 5s²"
    },
    "Ru": {
        "name": "Ruthenium",
        "number": 44,
        "mass": 101.07,
        "category": "metal",
        "state": "solid",
        "block": "d",
        "period": 5,
        "group": 8,
        "electronicConfiguration": "[Kr] 4d⁷ 5s¹"
    },
    "Rh": {
        "name": "Rhodium",
        "number": 45,
        "mass": 102.91,
        "category": "metal",
        "state": "solid",
        "block": "d",
        "period": 5,
        "group": 9,
        "electronicConfiguration": "[Kr] 4d⁸ 5s¹"
    },
    "Pd": {
        "name": "Palladium",
        "number": 46,
        "mass": 106.42,
        "category": "metal",
        "state": "solid",
        "block": "d",
        "period": 5,
        "group": 10,
        "electronicConfiguration": "[Kr] 4d¹⁰"
    },
    "Ag": {
        "name": "Silver",
        "number": 47,
        "mass": 107.868,
        "category": "metal",
        "state": "solid",
        "block": "d",
        "period": 5,
        "group": 11,
        "electronicConfiguration": "[Kr] 4d¹⁰ 5s¹"
    },
    "Cd": {
        "name": "Cadmium",
        "number": 48,
        "mass": 112.414,
        "category": "metal",
        "state": "solid",
        "block": "d",
        "period": 5,
        "group": 12,
        "electronicConfiguration": "[Kr] 4d¹⁰ 5s²"
    },
    "In": {
        "name": "Indium",
        "number": 49,
        "mass": 114.818,
        "category": "metal",
        "state": "solid",
        "block": "p",
        "period": 5,
        "group": 13,
        "electronicConfiguration": "[Kr] 4d¹⁰ 5s² 5p¹"
    },
    "Sn": {
        "name": "Tin",
        "number": 50,
        "mass": 118.71,
        "category": "metal",
        "state": "solid",
        "block": "p",
        "period": 5,
        "group": 14,
        "electronicConfiguration": "[Kr] 4d¹⁰ 5s² 5p²"
    },
    "Sb": {
        "name": "Antimony",
        "number": 51,
        "mass": 121.76,
        "category": "metalloid",
        "state": "solid",
        "block": "p",
        "period": 5,
        "group": 15,
        "electronicConfiguration": "[Kr] 4d¹⁰ 5s² 5p³"
    },
    "Te": {
        "name": "Tellurium",
        "number": 52,
        "mass": 127.6,
        "category": "metalloid",
        "state": "solid",
        "block": "p",
        "period": 5,
        "group": 16,
        "electronicConfiguration": "[Kr] 4d¹⁰ 5s² 5p⁴"
    },
    "I": {
        "name": "Iodine",
        "number": 53,
        "mass": 126.904,
        "category": "nonmetal",
        "state": "solid",
        "block": "p",
        "period": 5,
        "group": 17,
        "electronicConfiguration": "[Kr] 4d¹⁰ 5s² 5p⁵"
    },
    "Xe": {
        "name": "Xenon",
        "number": 54,
        "mass": 131.293,
        "category": "noble",
        "state": "gas",
        "block": "p",
        "period": 5,
        "group": 18,
        "electronicConfiguration": "[Kr] 4d¹⁰ 5s² 5p⁶"
    },
    "Cs": {
        "name": "Caesium",
        "number": 55,
        "mass": 132.905,
        "category": "metal",
        "state": "solid",
        "block": "s",
        "period": 6,
        "group": 1,
        "electronicConfiguration": "[Xe] 6s¹"
    },
    "Ba": {
        "name": "Barium",
        "number": 56,
        "mass": 137.327,
        "category": "metal",
        "state": "solid",
        "block": "s",
        "period": 6,
        "group": 2,
        "electronicConfiguration": "[Xe] 6s²"
    },
    "La": {
        "name": "Lanthanum",
        "number": 57,
        "mass": 138.905,
        "category": "metal",
        "state": "solid",
        "block": "f",
        "period": 6,
        "group": 3,
        "electronicConfiguration": "[Xe] 5d¹ 6s²"
    },
    "Ce": {
        "name": "Cerium",
        "number": 58,
        "mass": 140.116,
        "category": "metal",
        "state": "solid",
        "block": "f",
        "period": 6,
        "group": "f-block (lanthanide)",
        "electronicConfiguration": "[Xe] 4f¹ 5d¹ 6s²"
    },
    "Pr": {
        "name": "Praseodymium",
        "number": 59,
        "mass": 140.908,
        "category": "metal",
        "state": "solid",
        "block": "f",
        "period": 6,
        "group": "f-block (lanthanide)",
        "electronicConfiguration": "[Xe] 4f³ 6s²"
    },
    "Nd": {
        "name": "Neodymium",
        "number": 60,
        "mass": 144.242,
        "category": "metal",
        "state": "solid",
        "block": "f",
        "period": 6,
        "group": "f-block (lanthanide)",
        "electronicConfiguration": "[Xe] 4f⁴ 6s²"
    },
    "Pm": {
        "name": "Promethium",
        "number": 61,
        "mass": 145,
        "category": "metal",
        "state": "solid",
        "block": "f",
        "period": 6,
        "group": "f-block (lanthanide)",
        "electronicConfiguration": "[Xe] 4f⁵ 6s²"
    },
    "Sm": {
        "name": "Samarium",
        "number": 62,
        "mass": 150.36,
        "category": "metal",
        "state": "solid",
        "block": "f",
        "period": 6,
        "group": "f-block (lanthanide)",
        "electronicConfiguration": "[Xe] 4f⁶ 6s²"
    },
    "Eu": {
        "name": "Europium",
        "number": 63,
        "mass": 151.964,
        "category": "metal",
        "state": "solid",
        "block": "f",
        "period": 6,
        "group": "f-block (lanthanide)",
        "electronicConfiguration": "[Xe] 4f⁷ 6s²"
    },
    "Gd": {
        "name": "Gadolinium",
        "number": 64,
        "mass": 157.25,
        "category": "metal",
        "state": "solid",
        "block": "f",
        "period": 6,
        "group": "f-block (lanthanide)",
        "electronicConfiguration": "[Xe] 4f⁷ 5d¹ 6s²"
    },
    "Tb": {
        "name": "Terbium",
        "number": 65,
        "mass": 158.925,
        "category": "metal",
        "state": "solid",
        "block": "f",
        "period": 6,
        "group": "f-block (lanthanide)",
        "electronicConfiguration": "[Xe] 4f⁹ 6s²"
    },
    "Dy": {
        "name": "Dysprosium",
        "number": 66,
        "mass": 162.5,
        "category": "metal",
        "state": "solid",
        "block": "f",
        "period": 6,
        "group": "f-block (lanthanide)",
        "electronicConfiguration": "[Xe] 4f¹⁰ 6s²"
    },
    "Ho": {
        "name": "Holmium",
        "number": 67,
        "mass": 164.93,
        "category": "metal",
        "state": "solid",
        "block": "f",
        "period": 6,
        "group": "f-block (lanthanide)",
        "electronicConfiguration": "[Xe] 4f¹¹ 6s²"
    },
    "Er": {
        "name": "Erbium",
        "number": 68,
        "mass": 167.259,
        "category": "metal",
        "state": "solid",
        "block": "f",
        "period": 6,
        "group": "f-block (lanthanide)",
        "electronicConfiguration": "[Xe] 4f¹² 6s²"
    },
    "Tm": {
        "name": "Thulium",
        "number": 69,
        "mass": 168.934,
        "category": "metal",
        "state": "solid",
        "block": "f",
        "period": 6,
        "group": "f-block (lanthanide)",
        "electronicConfiguration": "[Xe] 4f¹³ 6s²"
    },
    "Yb": {
        "name": "Ytterbium",
        "number": 70,
        "mass": 173.045,
        "category": "metal",
        "state": "solid",
        "block": "f",
        "period": 6,
        "group": "f-block (lanthanide)",
        "electronicConfiguration": "[Xe] 4f¹⁴ 6s²"
    },
    "Lu": {
        "name": "Lutetium",
        "number": 71,
        "mass": 174.967,
        "category": "metal",
        "state": "solid",
        "block": "f",
        "period": 6,
        "group": "f-block (lanthanide)",
        "electronicConfiguration": "[Xe] 4f¹⁴ 5d¹ 6s²"
    },
    "Hf": {
        "name": "Hafnium",
        "number": 72,
        "mass": 178.49,
        "category": "metal",
        "state": "solid",
        "block": "d",
        "period": 6,
        "group": 3,
        "electronicConfiguration": "[Xe] 4f¹⁴ 5d² 6s²"
    },
    "Ta": {
        "name": "Tantalum",
        "number": 73,
        "mass": 180.948,
        "category": "metal",
        "state": "solid",
        "block": "d",
        "period": 6,
        "group": 5,
        "electronicConfiguration": "[Xe] 4f¹⁴ 5d³ 6s²"
    },
    "W": {
        "name": "Tungsten",
        "number": 74,
        "mass": 183.84,
        "category": "metal",
        "state": "solid",
        "block": "d",
        "period": 6,
        "group": 6,
        "electronicConfiguration": "[Xe] 4f¹⁴ 5d⁴ 6s²"
    },
    "Re": {
        "name": "Rhenium",
        "number": 75,
        "mass": 186.207,
        "category": "metal",
        "state": "solid",
        "block": "d",
        "period": 6,
        "group": 7,
        "electronicConfiguration": "[Xe] 4f¹⁴ 5d⁵ 6s²"
    },
    "Os": {
        "name": "Osmium",
        "number": 76,
        "mass": 190.23,
        "category": "metal",
        "state": "solid",
        "block": "d",
        "period": 6,
        "group": 8,
        "electronicConfiguration": "[Xe] 4f¹⁴ 5d⁶ 6s²"
    },
    "Ir": {
        "name": "Iridium",
        "number": 77,
        "mass": 192.217,
        "category": "metal",
        "state": "solid",
        "block": "d",
        "period": 6,
        "group": 9,
        "electronicConfiguration": "[Xe] 4f¹⁴ 5d⁷ 6s²"
    },
    "Pt": {
        "name": "Platinum",
        "number": 78,
        "mass": 195.084,
        "category": "metal",
        "state": "solid",
        "block": "d",
        "period": 6,
        "group": 10,
        "electronicConfiguration": "[Xe] 4f¹⁴ 5d⁹ 6s¹"
    },
    "Au": {
        "name": "Gold",
        "number": 79,
        "mass": 196.967,
        "category": "metal",
        "state": "solid",
        "block": "d",
        "period": 6,
        "group": 11,
        "electronicConfiguration": "[Xe] 4f¹⁴ 5d¹⁰ 6s¹"
    },
    "Hg": {
        "name": "Mercury",
        "number": 80,
        "mass": 200.592,
        "category": "liquid",
        "state": "liquid",
        "block": "d",
        "period": 6,
        "group": 12,
        "electronicConfiguration": "[Xe] 4f¹⁴ 5d¹⁰ 6s²"
    },
    "Tl": {
        "name": "Thallium",
        "number": 81,
        "mass": 204.38,
        "category": "metal",
        "state": "solid",
        "block": "p",
        "period": 6,
        "group": 13,
        "electronicConfiguration": "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹"
    },
    "Pb": {
        "name": "Lead",
        "number": 82,
        "mass": 207.2,
        "category": "metal",
        "state": "solid",
        "block": "p",
        "period": 6,
        "group": 14,
        "electronicConfiguration": "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²"
    },
    "Bi": {
        "name": "Bismuth",
        "number": 83,
        "mass": 208.98,
        "category": "metal",
        "state": "solid",
        "block": "p",
        "period": 6,
        "group": 15,
        "electronicConfiguration": "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³"
    },
    "Po": {
        "name": "Polonium",
        "number": 84,
        "mass": 209,
        "category": "metal",
        "state": "solid",
        "block": "p",
        "period": 6,
        "group": 16,
        "electronicConfiguration": "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴"
    },
    "At": {
        "name": "Astatine",
        "number": 85,
        "mass": 210,
        "category": "metalloid",
        "state": "solid",
        "block": "p",
        "period": 6,
        "group": 17,
        "electronicConfiguration": "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵"
    },
    "Rn": {
        "name": "Radon",
        "number": 86,
        "mass": 222,
        "category": "noble",
        "state": "gas",
        "block": "p",
        "period": 6,
        "group": 18,
        "electronicConfiguration": "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶"
    },
    "Fr": {
        "name": "Francium",
        "number": 87,
        "mass": 223,
        "category": "metal",
        "state": "solid",
        "block": "s",
        "period": 7,
        "group": 1,
        "electronicConfiguration": "[Rn] 7s¹"
    },
    "Ra": {
        "name": "Radium",
        "number": 88,
        "mass": 226,
        "category": "metal",
        "state": "solid",
        "block": "s",
        "period": 7,
        "group": 2,
        "electronicConfiguration": "[Rn] 7s²"
    },
    "Ac": {
        "name": "Actinium",
        "number": 89,
        "mass": 227,
        "category": "metal",
        "state": "solid",
        "block": "f",
        "period": 7,
        "group": 3,
        "electronicConfiguration": "[Rn] 6d¹ 7s²"
    },
    "Th": {
        "name": "Thorium",
        "number": 90,
        "mass": 232.038,
        "category": "metal",
        "state": "solid",
        "block": "f",
        "period": 7,
        "group": "f-block (actinide)",
        "electronicConfiguration": "[Rn] 6d² 7s²"
    },
    "Pa": {
        "name": "Protactinium",
        "number": 91,
        "mass": 231.036,
        "category": "metal",
        "state": "solid",
        "block": "f",
        "period": 7,
        "group": "f-block (actinide)",
        "electronicConfiguration": "[Rn] 5f² 6d¹ 7s²"
    },
    "U": {
        "name": "Uranium",
        "number": 92,
        "mass": 238.029,
        "category": "metal",
        "state": "solid",
        "block": "f",
        "period": 7,
        "group": "f-block (actinide)",
        "electronicConfiguration": "[Rn] 5f³ 6d¹ 7s²"
    },
    "Np": {
        "name": "Neptunium",
        "number": 93,
        "mass": 237,
        "category": "metal",
        "state": "solid",
        "block": "f",
        "period": 7,
        "group": "f-block (actinide)",
        "electronicConfiguration": "[Rn] 5f⁴ 6d¹ 7s²"
    },
    "Pu": {
        "name": "Plutonium",
        "number": 94,
        "mass": 244,
        "category": "metal",
        "state": "solid",
        "block": "f",
        "period": 7,
        "group": "f-block (actinide)",
        "electronicConfiguration": "[Rn] 5f⁶ 7s²"
    },
    "Am": {
        "name": "Americium",
        "number": 95,
        "mass": 243,
        "category": "metal",
        "state": "solid",
        "block": "f",
        "period": 7,
        "group": "f-block (actinide)",
        "electronicConfiguration": "[Rn] 5f⁷ 7s²"
    },
    "Cm": {
        "name": "Curium",
        "number": 96,
        "mass": 247,
        "category": "metal",
        "state": "solid",
        "block": "f",
        "period": 7,
        "group": "f-block (actinide)",
        "electronicConfiguration": "[Rn] 5f⁷ 6d¹ 7s²"
    },
    "Bk": {
        "name": "Berkelium",
        "number": 97,
        "mass": 247,
        "category": "metal",
        "state": "solid",
        "block": "f",
        "period": 7,
        "group": "f-block (actinide)",
        "electronicConfiguration": "[Rn] 5f⁹ 7s²"
    },
    "Cf": {
        "name": "Californium",
        "number": 98,
        "mass": 251,
        "category": "metal",
        "state": "solid",
        "block": "f",
        "period": 7,
        "group": "f-block (actinide)",
        "electronicConfiguration": "[Rn] 5f¹⁰ 7s²"
    },
    "Es": {
        "name": "Einsteinium",
        "number": 99,
        "mass": 252,
        "category": "metal",
        "state": "solid",
        "block": "f",
        "period": 7,
        "group": "f-block (actinide)",
        "electronicConfiguration": "[Rn] 5f¹¹ 7s²"
    },
    "Fm": {
        "name": "Fermium",
        "number": 100,
        "mass": 257,
        "category": "metal",
        "state": "solid",
        "block": "f",
        "period": 7,
        "group": "f-block (actinide)",
        "electronicConfiguration": "[Rn] 5f¹² 7s²"
    },
    "Md": {
        "name": "Mendelevium",
        "number": 101,
        "mass": 258,
        "category": "metal",
        "state": "solid",
        "block": "f",
        "period": 7,
        "group": "f-block (actinide)",
        "electronicConfiguration": "[Rn] 5f¹³ 7s²"
    },
    "No": {
        "name": "Nobelium",
        "number": 102,
        "mass": 259,
        "category": "metal",
        "state": "solid",
        "block": "f",
        "period": 7,
        "group": "f-block (actinide)",
        "electronicConfiguration": "[Rn] 5f¹⁴ 7s²"
    },
    "Lr": {
        "name": "Lawrencium",
        "number": 103,
        "mass": 266,
        "category": "metal",
        "state": "solid",
        "block": "f",
        "period": 7,
        "group": "f-block (actinide)",
        "electronicConfiguration": "[Rn] 5f¹⁴ 7s² 7p¹"
    },
    "Rf": {
        "name": "Rutherfordium",
        "number": 104,
        "mass": 267,
        "category": "metal",
        "state": "solid",
        "block": "d",
        "period": 7,
        "group": 3,
        "electronicConfiguration": "[Rn] 5f¹⁴ 6d² 7s²"
    },
    "Db": {
        "name": "Dubnium",
        "number": 105,
        "mass": 268,
        "category": "metal",
        "state": "solid",
        "block": "d",
        "period": 7,
        "group": 5,
        "electronicConfiguration": "[Rn] 5f¹⁴ 6d³ 7s²"
    },
    "Sg": {
        "name": "Seaborgium",
        "number": 106,
        "mass": 269,
        "category": "metal",
        "state": "solid",
        "block": "d",
        "period": 7,
        "group": 6,
        "electronicConfiguration": "[Rn] 5f¹⁴ 6d⁴ 7s²"
    },
    "Bh": {
        "name": "Bohrium",
        "number": 107,
        "mass": 270,
        "category": "metal",
        "state": "solid",
        "block": "d",
        "period": 7,
        "group": 7,
        "electronicConfiguration": "[Rn] 5f¹⁴ 6d⁵ 7s²"
    },
    "Hs": {
        "name": "Hassium",
        "number": 108,
        "mass": 277,
        "category": "metal",
        "state": "solid",
        "block": "d",
        "period": 7,
        "group": 8,
        "electronicConfiguration": "[Rn] 5f¹⁴ 6d⁶ 7s²"
    },
    "Mt": {
        "name": "Meitnerium",
        "number": 109,
        "mass": 278,
        "category": "metal",
        "state": "solid",
        "block": "d",
        "period": 7,
        "group": 9,
        "electronicConfiguration": "[Rn] 5f¹⁴ 6d⁷ 7s²"
    },
    "Ds": {
        "name": "Darmstadtium",
        "number": 110,
        "mass": 281,
        "category": "metal",
        "state": "solid",
        "block": "d",
        "period": 7,
        "group": 10,
        "electronicConfiguration": "[Rn] 5f¹⁴ 6d⁸ 7s²"
    },
    "Rg": {
        "name": "Roentgenium",
        "number": 111,
        "mass": 282,
        "category": "metal",
        "state": "solid",
        "block": "d",
        "period": 7,
        "group": 11,
        "electronicConfiguration": "[Rn] 5f¹⁴ 6d⁹ 7s²"
    },
    "Cn": {
        "name": "Copernicium",
        "number": 112,
        "mass": 285,
        "category": "metal",
        "state": "solid",
        "block": "d",
        "period": 7,
        "group": 12,
        "electronicConfiguration": "[Rn] 5f¹⁴ 6d¹⁰ 7s²"
    },
    "Nh": {
        "name": "Nihonium",
        "number": 113,
        "mass": 286,
        "category": "metal",
        "state": "solid",
        "block": "p",
        "period": 7,
        "group": 13,
        "electronicConfiguration": "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹"
    },
    "Fl": {
        "name": "Flerovium",
        "number": 114,
        "mass": 289,
        "category": "metal",
        "state": "solid",
        "block": "p",
        "period": 7,
        "group": 14,
        "electronicConfiguration": "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²"
    },
    "Mc": {
        "name": "Moscovium",
        "number": 115,
        "mass": 290,
        "category": "metal",
        "state": "solid",
        "block": "p",
        "period": 7,
        "group": 15,
        "electronicConfiguration": "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³"
    },
    "Lv": {
        "name": "Livermorium",
        "number": 116,
        "mass": 293,
        "category": "metal",
        "state": "solid",
        "block": "p",
        "period": 7,
        "group": 16,
        "electronicConfiguration": "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴"
    },
    "Ts": {
        "name": "Tennessine",
        "number": 117,
        "mass": 294,
        "category": "nonmetal",
        "state": "solid",
        "block": "p",
        "period": 7,
        "group": 17,
        "electronicConfiguration": "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵"
    },
    "Og": {
        "name": "Oganesson",
        "number": 118,
        "mass": 294,
        "category": "noble",
        "state": "gas",
        "block": "p",
        "period": 7,
        "group": 18,
        "electronicConfiguration": "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶"
    }
};

const categoryLabels = {
    metal: "Metal",
    nonmetal: "Non-metal",
    metalloid: "Metalloid",
    noble: "Noble gas",
    liquid: "Liquid"
};

const categoryClass = {
    metal: ["metals", "metal"],
    nonmetal: ["nonmetal"],
    metalloid: ["metalloid"],
    noble: ["noble"],
    liquid: ["liquid-elements"]
};

function getElementData(symbol) {
    return elementData[symbol] || {
        name: symbol, number: "—", mass: "—", category: "—", state: "—",
        block: "—", period: "—", group: "—", electronicConfiguration: "—"
    };
}

function categoryMatches(element, filter) {
    if (filter === "all") return true;
    const classes = categoryClass[filter] || [];
    return classes.some(className => element.classList.contains(className));
}

function showInfo(element) {
    const symbol = element.dataset.element;
    const data = getElementData(symbol);

    document.querySelectorAll("td[data-element].selected").forEach(el => el.classList.remove("selected"));
    element.classList.add("selected");

    document.getElementById("info-symbol").textContent = symbol;
    document.getElementById("info-name").textContent = data.name;
    document.getElementById("info-category").textContent = categoryLabels[data.category] || data.category;
    document.getElementById("info-number").textContent = data.number;
    document.getElementById("info-mass").textContent = data.mass;
    document.getElementById("info-group").textContent = data.group;
    document.getElementById("info-period").textContent = data.period;
    document.getElementById("info-state").textContent = data.state;
    document.getElementById("info-block").textContent = data.block;
    document.getElementById("info-config").textContent = data.electronicConfiguration || "—";

    const card = document.getElementById("info-card");
    card.classList.add("show");
    card.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function runSearch() {
    const query = document.getElementById("search-input").value.trim().toLowerCase();
    const activeFilter = document.querySelector(".filter-btn.active")?.dataset.filter || "all";
    const elements = document.querySelectorAll("td[data-element]");
    let matches = 0;

    elements.forEach(element => {
        const symbol = element.dataset.element;
        const data = getElementData(symbol);
        const haystack = `${symbol} ${data.name} ${data.number}`.toLowerCase();
        const queryMatch = !query || haystack.includes(query);
        const filterMatch = categoryMatches(element, activeFilter);
        const match = queryMatch && filterMatch;

        element.classList.toggle("is-hidden", !match);
        element.classList.toggle("is-match", Boolean(query) && match);
        if (match) matches++;
    });

    const status = document.getElementById("search-status");
    if (query || activeFilter !== "all") {
        status.textContent = `${matches} element${matches === 1 ? "" : "s"} shown`;
    } else {
        status.textContent = "";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll("td[data-element]");

    elements.forEach(element => {
        element.addEventListener("click", () => {
            element.classList.remove("active");
            void element.offsetWidth;
            element.classList.add("active");
            showInfo(element);
        });
    });

    document.querySelectorAll(".filter-btn").forEach(button => {
        button.addEventListener("click", () => {
            document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
            runSearch();
        });
    });

    document.getElementById("search-input").addEventListener("input", runSearch);

    document.getElementById("clear-search").addEventListener("click", () => {
        document.getElementById("search-input").value = "";
        runSearch();
        document.getElementById("search-input").focus();
    });

    document.getElementById("close-info").addEventListener("click", () => {
        document.getElementById("info-card").classList.remove("show");
        document.querySelectorAll("td[data-element].selected").forEach(el => el.classList.remove("selected"));
    });
});



const themeButton = document.getElementById("theme-btn");

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("light");

});



// ===============================
// QUIZ VARIABLES
// ===============================

let score = 0;
let currentAnswer = "";

let currentQuestion = 0;
let totalQuestions = 10;


// ===============================
// QUIZ ELEMENTS
// ===============================

const quizButton =
    document.getElementById("quiz-btn");

const quizBox =
    document.getElementById("quiz-box");

const closeQuiz =
    document.getElementById("close-quiz");

const nextQuestion =
    document.getElementById("next-question");

const feedback =
    document.getElementById("feedback");

const tryAgain =
    document.getElementById("try-again");


// ===============================
// OPEN QUIZ
// ===============================

quizButton.addEventListener("click", function () {

    quizBox.style.display = "block";

    score = 0;

    currentQuestion = 0;

    document.getElementById("score").textContent =
        `Score: ${score}`;

    document.getElementById("quiz-result").textContent = "";

    tryAgain.style.display = "none";

    generateQuestion();
});


// ===============================
// CLOSE QUIZ
// ===============================

closeQuiz.addEventListener("click", function () {

    quizBox.style.display = "none";

});


// ===============================
// RANDOM ELEMENT
// ===============================

function getRandomElement() {

    const symbols =
        Object.keys(elementData);

    const randomIndex =
        Math.floor(Math.random() * symbols.length);

    const randomSymbol =
        symbols[randomIndex];

    return elementData[randomSymbol];
}


// ===============================
// GENERATE QUESTION
// ===============================

function generateQuestion() {

    // Increase question number

    currentQuestion++;


    // Show question number

    document.getElementById("question-count").textContent =
        `Question ${currentQuestion} / ${totalQuestions}`;


    // Clear old feedback

    feedback.textContent = "";


    // Hide buttons

    nextQuestion.style.display = "none";

    tryAgain.style.display = "none";


    // Get random element

    const element =
        getRandomElement();


    // Store correct answer

    currentAnswer =
        element.name;


    // Show question

    document.getElementById("question").textContent =
        `Which element has atomic number ${element.number}?`;


    // Options container

    const optionsBox =
        document.getElementById("options");


    // Remove old options

    optionsBox.innerHTML = "";


    // Get all elements

    const symbols =
        Object.keys(elementData);


    // Correct answer

    const options = [element.name];


    // Generate 3 wrong answers

    while (options.length < 4) {

        const randomSymbol =
            symbols[
                Math.floor(
                    Math.random() * symbols.length
                )
            ];

        const randomName =
            elementData[randomSymbol].name;


        if (!options.includes(randomName)) {

            options.push(randomName);

        }
    }


    // Shuffle options

    options.sort(() =>
        Math.random() - 0.5
    );


    // Create option buttons

    options.forEach(function (option) {

        const button =
            document.createElement("button");


        button.textContent =
            option;


        // Answer click

        button.addEventListener("click", function () {

            // Correct answer

            if (option === currentAnswer) {

                score++;

                document.getElementById("score").textContent =
                    `Score: ${score}`;

                feedback.textContent =
                    "✅ Correct!";

                feedback.style.color =
                    "lightgreen";

            }

            // Wrong answer

            else {

                feedback.textContent =
                    `❌ Wrong! Correct answer: ${currentAnswer}`;

                feedback.style.color =
                    "#ff6b6b";

            }


            // Disable all options

            const allButtons =
                document.querySelectorAll(
                    "#options button"
                );


            allButtons.forEach(function (btn) {

                btn.disabled = true;

            });


            // If this was question 10

            if (currentQuestion === totalQuestions) {

                nextQuestion.style.display =
                    "none";

                setTimeout(function () {

                    document.getElementById("question").textContent =
                        "🎉 Quiz Complete!";

                    document.getElementById("question-count").textContent =
                        "Finished!";

                    document.getElementById("quiz-result").textContent =
                        `Your Score: ${score} / ${totalQuestions}`;

                    tryAgain.style.display =
                        "inline-block";

                }, 800);

            }

            // Otherwise show Next button

            else {

                nextQuestion.style.display =
                    "inline-block";

            }

        });


        optionsBox.appendChild(button);

    });

}


// ===============================
// NEXT QUESTION
// ===============================

nextQuestion.addEventListener("click", function () {

    generateQuestion();

});


// ===============================
// TRY AGAIN
// ===============================

tryAgain.addEventListener("click", function () {

    score = 0;

    currentQuestion = 0;

    document.getElementById("score").textContent =
        "Score: 0";

    document.getElementById("quiz-result").textContent =
        "";

    generateQuestion();

});