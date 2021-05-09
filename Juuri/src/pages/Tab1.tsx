import React, { useState } from 'react';
import { IonContent, IonTabButton, IonFooter, IonCardHeader, IonCard, IonCardTitle, IonHeader, IonList, IonItem, IonSearchbar, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';



const Tab1: React.FC = () => {
    const [searchText, setSearchText] = useState('');
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Juuri</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
              <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)}></IonSearchbar>
              <IonCard>
                      <img src="assets/img/L1.jpg" />
                      <IonCardHeader>
                      <IonCardTitle>The Best Sour Bread</IonCardTitle>
                      </IonCardHeader>
                  </IonCard> <IonCard>
                      <img src="assets/img/L3.jpg" />
                      <IonCardHeader>
                          <IonCardTitle>Three Breads</IonCardTitle>
                      </IonCardHeader>
                  </IonCard> <IonCard>
                      <img src="assets/img/L2.jpg" />
                      <IonCardHeader>
                          <IonCardTitle>Dark Yummi</IonCardTitle>
                      </IonCardHeader>
                  </IonCard>
          </IonContent>
      </IonPage>

  );
};

export default Tab1;
