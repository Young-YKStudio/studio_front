export const Demo_Button_Black = ({text, link}) => {
  return (
    <a
      href={link}
      className="flex w-48 justify-center items-center border-2 px-4 py-2 border-black font-bold hover:bg-black hover:text-yellow-400"
    >{text}</a>
  );
}

export const Demo_Button_Yellow = ({text, link}) => {
  return (
    <a
      href={link}
      className="flex justify-center items-center border-2 px-4 py-2 text-yellow-400 font-bold border-yellow-400 hover:bg-yellow-400 hover:text-black"
    >{text}</a>
  );
}
