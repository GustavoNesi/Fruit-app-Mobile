import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    height: 144px;

    padding-left: 15px;
    padding-right: 15px;
    
    margin-bottom: 15px;
`

export const ButtonContainer = styled.Pressable`
    width: 100%;
    height: 144px;
`

export const ImageBanner = styled.Image.attrs({
    resizeMode:"contain"
})`
    width: 100%;
    height: 144px;

    border-radius: 30px;
`