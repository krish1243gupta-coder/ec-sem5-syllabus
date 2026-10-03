const syllabusLinks = {
    antenna: "https://drive.google.com/file/d/1cn6k5sNkazj9oqod2dEdz7Nkk8aesALV/view?usp=sharing",

    vlsi: "https://drive.google.com/file/d/1VWe6wWDWHHyDre-rijA07IjRrB1nG6xo/view?usp=sharing",

    digital: "https://drive.google.com/file/d/1gYhYnUxAjB_Sc0thzykauvc6sFq5ZJfu/view?usp=sharing",

    microcontroller: "https://drive.google.com/file/d/1ePwOeTZ4Zz99UeT1HCn-yCriAv9plW1D/view?usp=sharing",

    pcb: "https://drive.google.com/file/d/18KqQ53cEmcgTW0EOCVzgprfZDmhfmsXO/view?usp=sharing"
};

function openSyllabus(subject) {

    const link = syllabusLinks[subject];

    if (link) {
        window.open(link, "_blank");
    } else {
        alert("Syllabus link not available.");
    }
}