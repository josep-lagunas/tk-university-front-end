import React from "react";
import styled from 'styled-components'
import {v4 as uuid} from 'uuid';
import {useHistory} from 'react-router-dom';

const RecipeContainer = styled.div`
        background-color: #fff;
        display: flex;
        position: relative;
        float: left;
        height: 7vw;
        border: solid 0.5px #fff;
        border-radius: 4px;
        width: 7vw;
        cursor: pointer;
        margin: 0.1vw;
        opacity: 0.5;
        text-align: center;
        align-items: center;
        overflow: hidden;
        opacity: 0.7;
        transition: all 0.3s;
        &:hover{
            background-color: #fff;
            opacity: 1;
            transform: scale(1.3);
            border-radius: 2px;
            z-index:10;
        }
     `;

const Title = styled.p`
        font-family: 'Annie Use Your Telescope', cursive;
        font-size: 1.5em;
        width: inherit;
     `;

const IconsContainer = styled.div`
        position: absolute;
        bottom: 0;
        right: -30px;  
        transition: all 0.3s;
                
        ${RecipeContainer}:hover & {
            right: 0;
        }
     `;

const Icon = styled.i`
        font-size: 1.1em;
        margin-right: 3px;
        cursor: pointer;
     `;

export default (props) => {

    const history = useHistory();

    const performRemoveActions = async evt => {
        evt.stopPropagation();
        await props.onremove(props.recipe.id);
    };

    const openEditRecipe = evt => {
        history.push('/edit', props.recipe);
    }

    return (
        <RecipeContainer data-testid='recipe-container'
                         onClick={openEditRecipe}>
            <Title key={uuid().toString()}>{props.recipe.name}</Title>
            <IconsContainer>
                <Icon data-testid='remove-icon' className="fa fa-trash" onClick={performRemoveActions}/>
            </IconsContainer>
        </RecipeContainer>

    );
}