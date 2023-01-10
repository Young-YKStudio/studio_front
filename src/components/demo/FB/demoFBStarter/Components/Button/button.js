export const Demo_Button_Black = ({text, link}) => {
  return (
    <a
      href={link}
      className="flex w-48 justify-center items-center border-2 px-4 py-2 border-white font-bold hover:bg-white hover:text-red-800"
    >{text}</a>
  );
}

export const Demo_Button_Yellow = ({text, link}) => {
  return (
    <a
      href={link}
      className="flex justify-center items-center border-2 px-4 py-2 text-white font-bold border-white bg-red-800 hover:border-white hover:bg-white hover:text-red-800"
    >{text}</a>
  );
}
