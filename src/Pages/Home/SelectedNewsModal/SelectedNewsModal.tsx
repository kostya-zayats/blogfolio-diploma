import React from 'react';
import Modal from 'react-modal';
import NewsListUnit from "../../../Components/NewsListUnit/NewsListUnit";
import {useDispatch, useSelector} from "react-redux";
import NewsSelectors from '../../../Redux/Selectors/newsSelectors';
import {setSelectedNewsModalVisible} from '../../../Redux/Reducers/newsReducer';

const SelectedNewsModal = () => {
  const selectedNews = useSelector(NewsSelectors.getSelectedNews);
  const isVisible = useSelector(NewsSelectors.getSelectedNewsModalVisible);

  const dispatch = useDispatch();

  const onClose = () => {
    dispatch(setSelectedNewsModalVisible(false))
  };

  return (
    selectedNews && (
      <Modal ariaHideApp={false} isOpen={isVisible} onRequestClose={onClose} overlayClassName="myOverlayClass">
        <NewsListUnit newsPost={selectedNews} />
        <p>{selectedNews.text}</p>
      </Modal>
    )
  );
};

//position: fixed; inset: 0px; background-color: rgba(255, 255, 255, 0.75);

export default SelectedNewsModal;