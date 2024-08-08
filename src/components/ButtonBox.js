const ButtonBox = ({ children }) => {
    return <div className="buttonBox w-full h-[calc(100%-110px)] grid grid-cols-4 grid-rows-4 gap-2.5">
        {children}
        </div>;
}

export default ButtonBox;
