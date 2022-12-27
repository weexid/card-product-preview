import React from 'react'
import { CardContainer, Card, ImageContainer, ContentContainer, CardCategory, CardTitle, CardDescription, ProductPriceContainer, RealPrice, FakePrice, CardButton} from "./productCard.styled";
import iconCart from '../../assets/icon-cart.svg';


function ProductCard() {
    return (
        <CardContainer>
            <Card>
                <ImageContainer />

                <ContentContainer>
                    <CardCategory>
                        PERFUME
                    </CardCategory>

                    <CardTitle>
                        Gabrielle Essence Eau De Parfum
                    </CardTitle>

                    <CardDescription>
                        A floral, solar and voluptous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL
                    </CardDescription>

                    <ProductPriceContainer>
                        <RealPrice>$149.99</RealPrice>
                        <FakePrice>$169.99</FakePrice>
                    </ProductPriceContainer>

                    <CardButton>
                        <span><img src={iconCart}></img></span>Add to Cart
                    </CardButton>

                </ContentContainer>
            </Card>
        </CardContainer>
    )
}

export default ProductCard