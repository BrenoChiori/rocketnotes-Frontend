import React from "react";
import { RiShutDownLine } from 'react-icons/ri'
import { FaList } from "react-icons/fa";
import { useAuth } from '../../hooks/auth'
import { api } from "../../services/api";
import { Container, Profile, Logout, Menu } from "./styles";
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import { useNavigate } from "react-router-dom";

export function Header({ onOpenMenu }) {
    const { signOut, user } = useAuth()
    const navigation = useNavigate()

    function handleSingnOut() {
        navigation("/")
        signOut()
    }

    const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

    return (
        <Container>
            <Menu onClick={onOpenMenu}>
                <FaList />
            </Menu>
            <Profile to="/profile">
                <img 
                    src={avatarURL}
                    alt={user.name}
                />

                <div>
                    <span>Bem vindo,</span>
                    <strong>{user.name}</strong>
                </div>
            </Profile>

            <Logout onClick={handleSingnOut}>
                <RiShutDownLine />
            </Logout>
        </Container>
    )
}