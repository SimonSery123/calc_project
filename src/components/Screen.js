import { Textfit } from 'react-textfit';

const Screen = ({ value }) => {
    return (
        <Textfit className="screen h-full w-full mb-3 px-3 bg-cyan-700 rounded-xl flex items-center justify-end text-white box" mode="single" max={70}>
            {value}
        </Textfit>
    );
};

export default Screen;