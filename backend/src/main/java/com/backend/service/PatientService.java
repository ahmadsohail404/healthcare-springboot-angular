import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Service
public class PatientService {

    private final List<Patient> patients = new ArrayList<>();
    private long patientIdCounter = 1;

    public Patient createPatient(Patient patient) {
        patient.setId(patientIdCounter++);
        patients.add(patient);
        return patient;
    }

    public Patient updatePatient(Long id, Patient updatedPatient) {
        for (Patient patient : patients) {
            if (patient.getId().equals(id)) {
                patient.setName(updatedPatient.getName());
                patient.setAge(updatedPatient.getAge());
                return patient;
            }
        }
        return null;
    }

    public Patient getPatientById(Long id) {
        for (Patient patient : patients) {
            if (patient.getId().equals(id)) {
                return patient;
            }
        }
        return null;
    }

    public boolean deletePatient(Long id) {
        for (Patient patient : patients) {
            if (patient.getId().equals(id)) {
                patients.remove(patient);
                return true;
            }
        }
        return false;
    }

    public List<Patient> getAllPatients() {
        return patients;
    }

    public List<Patient> searchPatientsByName(String name) {
        List<Patient> matchingPatients = new ArrayList<>();
        for (Patient patient : patients) {
            if (patient.getName().equalsIgnoreCase(name)) {
                matchingPatients.add(patient);
            }
        }
        return matchingPatients;
    }

    public List<Patient> getPatientsByDoctorId(Long doctorId) {
        List<Patient> matchingPatients = new ArrayList<>();
        for (Patient patient : patients) {
            if (patient.getDoctorId().equals(doctorId)) {
                matchingPatients.add(patient);
            }
        }
        return matchingPatients;
    }

    public List<Patient> searchPatientsByDoctorId(Long doctorId) {
        List<Patient> matchingPatients = new ArrayList<>();
        for (Patient patient : patients) {
            if (patient.getDoctorId().equals(doctorId)) {
                matchingPatients.add(patient);
            }
        }
        return matchingPatients;
    }
}
