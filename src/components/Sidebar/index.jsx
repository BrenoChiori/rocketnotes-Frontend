import { Container, Brand, Menu, NewNote } from "./styles";
import { FiPlus } from 'react-icons/fi';
import { IoCloseSharp } from "react-icons/io5";
import { ButtonText } from "../ButtonText";

export function Sidebar({ tags, tagsSelected, onTagSelected, menuIsOpen, onCloseMenu }) {
    return (
        <Container data-menu-is-open={menuIsOpen}>
            <Brand>
                <h1>Simple Notes</h1>
                <button onClick={onCloseMenu}><IoCloseSharp /></button>
            </Brand>

            <Menu>
                <li>
                    <ButtonText
                        title="Todos"
                        onClick={() => onTagSelected("all")}
                        isActive={tagsSelected.length === 0}
                    />
                </li>

                {tags && tags.map(tag => (
                    <li key={String(tag.id)}>
                        <ButtonText
                            title={tag.name}
                            onClick={() => onTagSelected(tag.name)}
                            isActive={tagsSelected.includes(tag.name)}
                        />
                    </li>
                ))}
            </Menu>

            <NewNote to="/new">
                <FiPlus />
                Criar Nota
            </NewNote>
        </Container>
    );
}
