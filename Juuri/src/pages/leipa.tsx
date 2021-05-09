import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './leipa.css';

const Leipa: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>The best sour bread</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">The Best Sour Bread</IonTitle>
          </IonToolbar>
              </IonHeader>
              <img src="assets/img/L1.jpg" />

      </IonContent>
    </IonPage>
  );
};

export default Leipa;