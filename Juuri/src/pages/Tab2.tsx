import React, { useState } from 'react';
import { IonContent, IonFooter, IonCardHeader, IonCard, IonCardTitle, IonHeader, IonList, IonItem, IonSearchbar, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';



const Tab2: React.FC = () => {
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
                </IonCard> 
            </IonContent>
        </IonPage>
  );
};

export default Tab2;
