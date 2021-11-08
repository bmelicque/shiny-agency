const style = {
    wrapper: "w-full h-full flex justify-center items-center",
    spinner: "w-64 h-64 m-16 rounded-full border-8 border-t-primary animate-spin",
}

export function Loader() {
    return (
        <div className={style.wrapper}>
            <div className={style.spinner}></div>
        </div>
    );
}
