/* eslint-disable @typescript-eslint/no-unused-vars */
import { RefObject, useRef, useState, useEffect } from 'react';

enum DROPDOWNS {
    REPORT = 'REPORT',
    USER = 'USER',
}

type IDropdowns = keyof typeof DROPDOWNS | null;

type IUseDropdown = [RefObject<HTMLInputElement>, IDropdowns, React.Dispatch<React.SetStateAction<IDropdowns>>];

const useDropdowns = (): IUseDropdown => {
    const headerRef = useRef<HTMLInputElement>(null);
    const openDropdownVarRef = useRef<IDropdowns>(null);
    const [openDropdownName, setOpenDropdownName] = useState<IDropdowns>(null);

    useEffect(() => {
        /**
         * @param e
         */
        function onGlobalClick(e: MouseEvent): void {
            if (!openDropdownName) {
                return;
            }
            if (!(e.target instanceof Element)) {
                return;
            }
            if (!headerRef.current || headerRef.current.contains(e.target)) {
                return;
            }
            setOpenDropdownName(null);
        }

        window.addEventListener('click', onGlobalClick);
        return (): void => {
            return window.removeEventListener('click', onGlobalClick);
        };
    }, [openDropdownName]);

    return [headerRef, openDropdownName, setOpenDropdownName];
};
