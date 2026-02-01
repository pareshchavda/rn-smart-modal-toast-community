// src/ToastDemo.tsx
import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View, Switch, Modal } from 'react-native';

import { toast, useToast } from 'rn-smart-modal-toast';

export default function ToastDemo() {
  const t = useToast();
  const [showProgress, setShowProgress] = React.useState(true);
  const [modalVisible, setModalVisible] = React.useState(false);


  return (
    <ScrollView contentContainerStyle={styles.wrapper}>
      <Text style={styles.title}>RN toast 🚀</Text>
      <Text style={styles.subtitle}>
        Professional notifications for React Native
      </Text>

      <View style={styles.configRow}>
        <Text style={styles.configLabel}>Show Progress Bar</Text>
        <Switch
          value={showProgress}
          onValueChange={setShowProgress}
          trackColor={{ false: '#334155', true: '#2563EB' }}
        />
      </View>

      <Section title="Themes">
        <View style={styles.btnGrid}>
          <Btn
            title="Light Theme"
            style={styles.lightBtn}
            textStyle={styles.lightBtnText}
            onPress={() => toast.info('Light theme notification', { theme: 'light', showProgressBar: showProgress })}
          />
          <Btn
            title="Dark Theme"
            style={styles.darkBtn}
            onPress={() => toast.dark('Dark theme notification', { showProgressBar: showProgress })}
          />
          <Btn
            title="Colored Theme"
            style={styles.coloredBtn}
            onPress={() => toast.success('Colored theme notification', { theme: 'colored', showProgressBar: showProgress })}
          />
        </View>
      </Section>

      <Section title="Built-in Types">
        <Btn title="Success" style={styles.successBtn} onPress={() => toast.success('Operation successful!', { showProgressBar: showProgress })} />
        <Btn title="Error" style={styles.errorBtn} onPress={() => toast.error('Something went wrong', { showProgressBar: showProgress })} />
        <Btn title="Warning" style={styles.warningBtn} onPress={() => toast.warn('Please be careful', { showProgressBar: showProgress })} />
        <Btn title="Info" style={styles.infoBtn} onPress={() => toast.info('New update available', { showProgressBar: showProgress })} />
      </Section>

      <Section title="Rich Content">
        <Btn
          title="With Title & Description"
          onPress={() =>
            toast.success('Your profile has been updated.', {
              title: 'Success!',
              description: 'All changes are saved to the cloud.',
              showProgressBar: showProgress,
            })
          }
        />
        <Btn
          title="Sticky Notification"
          onPress={() =>
            toast.dark('User logged out', {
              description: 'See you again soon!',
              position: 'bottom',
              duration: 0, // Assuming sticky means duration 0
              swipeEnabled: true,
            })
          }
        />
      </Section>

      <Section title="Placement & Animations">
        <View style={styles.btnGrid}>
          <Btn title="Top" style={styles.smallBtn} onPress={() => toast.show('Top position', { position: 'top' })} />
          <Btn title="Bottom" style={styles.smallBtn} onPress={() => toast.show('Bottom position', { position: 'bottom' })} />
        </View>
        <View style={styles.btnGrid}>
          <Btn title="Bounce" style={styles.smallBtn} onPress={() => toast.show('Bounce!', { animationType: 'bounce' })} />
          <Btn title="Zoom" style={styles.smallBtn} onPress={() => toast.show('Zoom!', { animationType: 'zoom' })} />
          <Btn title="Fade" style={styles.smallBtn} onPress={() => toast.show('Fade!', { animationType: 'fade' })} />
        </View>
      </Section>

      <Section title="Advanced">
        <Btn
          title="Open Modal Demo"
          style={styles.modalDemoBtn}
          onPress={() => setModalVisible(true)}
        />
        <Btn
          title="Custom Styled Toast"
          onPress={() =>
            toast('Custom Styled', {
              style: { backgroundColor: '#6366f1', borderRadius: 20 },
              textStyle: { fontWeight: 'bold', color: '#fff' },
              description: 'This is a custom styled toast',
            })
          }
        />

      </Section>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Inside a Modal</Text>
            <Btn
              title="Show Toast"
              onPress={() => toast.success('Toast from Modal!', { useModal: true })}
            />
            <Btn
              title="Close Modal"
              style={styles.closeBtn}
              onPress={() => setModalVisible(false)}
            />
          </View>
        </View>
      </Modal>


      <Btn title="Dismiss All" style={styles.dismissBtn} onPress={() => t.dismiss()} />
      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

function Section({ title, children }: any) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {children}
    </View>
  );
}

function Btn({ title, onPress, style, textStyle }: any) {
  return (
    <Pressable style={[styles.button, style]} onPress={onPress}>
      <Text style={[styles.btnText, textStyle]}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 24,
    backgroundColor: '#0F172A',
  },
  title: {
    fontSize: 28,
    fontWeight: '900',
    color: '#fff',
    textAlign: 'center',
    marginTop: 40,
  },
  subtitle: {
    color: '#94A3B8',
    textAlign: 'center',
    marginBottom: 30,
    fontSize: 16,
  },
  configRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1E293B',
    padding: 16,
    borderRadius: 12,
    marginBottom: 24,
  },
  configLabel: {
    color: '#CBD5E1',
    fontWeight: '600',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    color: '#64748B',
    fontSize: 14,
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 12,
  },
  btnGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#334155',
    paddingVertical: 14,
    borderRadius: 12,
    marginBottom: 10,
    flex: 1,
    minWidth: '45%',
  },
  smallBtn: {
    minWidth: '30%',
  },
  btnText: {
    color: '#fff',
    fontWeight: '700',
    textAlign: 'center',
    fontSize: 14,
  },
  successBtn: { backgroundColor: '#10b981' },
  errorBtn: { backgroundColor: '#ef4444' },
  warningBtn: { backgroundColor: '#f59e0b' },
  infoBtn: { backgroundColor: '#3b82f6' },
  darkBtn: { backgroundColor: '#1f2937', borderWidth: 1, borderColor: '#334155' },
  lightBtn: { backgroundColor: '#f8fafc' },
  lightBtnText: { color: '#0f172a' },
  coloredBtn: { backgroundColor: '#6366f1' },
  dismissBtn: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#ef4444',
    marginTop: 20,
  },
  modalDemoBtn: {
    backgroundColor: '#6366f1',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: '#1E293B',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '80%',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  closeBtn: {
    backgroundColor: '#334155',
    marginTop: 10,
  },
});


