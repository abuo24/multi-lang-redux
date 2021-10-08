
import uz from "./../uz.json"
import ru from "./../ru.json"
export const changeLang = (lang = "uz") => {

    localStorage.setItem("lang",lang);

    let req = lang==="uz"?uz:ru;
    return {
        type: "CHANGE_LANG",
        payload: req
    }
}