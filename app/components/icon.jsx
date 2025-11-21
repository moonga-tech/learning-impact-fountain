export function Icon({ name, className = "inline-block" }) {
    const map = {
        target: "fa-solid fa-bullseye",
        vision: "fa-solid fa-eye",
        
        check: "fa-solid fa-circle-check",
        arrow: "fa-solid fa-arrow-right",

        plus: "fa-solid fa-plus",
        minus: "fa-solid fa-minus",
    };
    const fa = map[name] || map.arrow;
    return <i className={`${fa} ${className}`} aria-hidden="true"></i>;
}