import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import api from 'src/shared/api';

import MainSection from './components/MainSection';
import InfoSection from './components/InfoSection';
import PlanSection from './components/PlanSection';

const Product = () => {
  const [product, setProduct] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await api.get(`/house/${id}`);
        setProduct(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <>
      <MainSection {...product} />
      <InfoSection {...product} />
      <PlanSection {...product} />
    </>
  );
};

export default Product;
