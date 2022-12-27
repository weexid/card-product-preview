import React from 'react'
import { CardContainer, Card, ImageContainer, CardImage, ContentContainer, CardCategory, CardTitle, CardDescription, ProductPriceContainer, RealPrice, FakePrice, ProductBtnContainer, CardButton, CartIcon } from "./productCard.styled";

function ProductCard() {
    return (
        <CardContainer>
            <Card>
                <ImageContainer>
                    <CardImage />
                </ImageContainer>

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

                    <ProductBtnContainer>
                        <CardButton>
                            <CartIcon /> Add to Cart
                        </CardButton>
                    </ProductBtnContainer>

                </ContentContainer>
            </Card>
        </CardContainer>
    )
}

export default ProductCard