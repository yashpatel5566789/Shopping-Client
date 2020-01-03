import styled from "styled-components";


export const ProductWrapper = styled.div`
  .card {

    
  }
  .card-footer {
    background: transparent;
    border-top: transparent;

  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);

    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
 
  }
  .img-container:hover .card-img-top {

  }
  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;


  }
  .img-container:hover .cart-btn {

  }
  .cart-btn:hover {
    color: var(--mainBlue);
    cursor: pointer;
  }


  .p-5{
    padding: 48px!important;

  }
`;
