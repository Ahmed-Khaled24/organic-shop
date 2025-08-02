import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import classNames from "classnames";
import type { FC, JSX } from "react";

export interface MenuItemProps {
    content: string | JSX.Element;
    href?: string;
    clickHandler?: () => void;
}

export interface DropdownProps {
    mainText: string | JSX.Element;
    menuItems: MenuItemProps[];
}

export const Dropdown: FC<DropdownProps> = ({ mainText, menuItems }) => {
    const itemStyles = classNames(
        "block data-focus:bg-gray-100 py-2 px-2 cursor-pointer",
    );

    return (
        <Menu>
            <MenuButton className="focus-visible:outline-none">
                {mainText}
            </MenuButton>
            <MenuItems
                anchor="bottom"
                className="focus-visible:outline-none flex flex-col rounded-sm border-2 border-gray-200 bg-white"
            >
                {menuItems.map((item) => (
                    <MenuItem>
                        {item.href ? (
                            <a
                                className={itemStyles}
                                onClick={item.clickHandler}
                                href={item.href}
                            >
                                {item.content}
                            </a>
                        ) : (
                            <button
                                className={itemStyles}
                                onClick={item.clickHandler}
                            >
                                {item.content}
                            </button>
                        )}
                    </MenuItem>
                ))}
            </MenuItems>
        </Menu>
    );
};
