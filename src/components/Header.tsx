import { Switch } from "@headlessui/react";

type HeaderProps = {
    theme: boolean,
    changeTheme: () => void
}

export default function Header({theme, changeTheme} : HeaderProps) {
    return (
        <header className="flex justify-between mt-6 max-w-[736px] mx-auto">
            <img src="/public/assets/images/logo.svg" alt="logo" />
            <div className="flex items-center">
                <select name="" id="">
                    <option value="">mono</option>
                    <option value="">arial</option>
                    <option value="">serif</option>
                </select>
                <Switch
                    checked={theme}
                    onChange={changeTheme}
                    className="group relative flex h-7 w-14 cursor-pointer rounded-full bg-[#979797] p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-purple-600"
                >
                <span
                    aria-hidden="true"
                    className="pointer-events-none inline-block size-5 translate-x-0 rounded-full bg-white ring-0 shadow-lg transition duration-200 ease-in-out group-data-[checked]:translate-x-7"
                />
                </Switch>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"><path fill="none" stroke={theme == false ? '#838383' : '#A445ED'} stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"/></svg>
            </div>
        </header>
    );
}
