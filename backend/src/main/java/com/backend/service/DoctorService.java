import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Service
public class DoctorService {

    private final List<Doctor> doctors = new ArrayList<>();
    private long doctorIdCounter = 1;

    public Doctor createDoctor(Doctor doctor) {
        doctor.setId(doctorIdCounter++);
        doctors.add(doctor);
        return doctor;
    }

    public Doctor updateDoctor(Long id, Doctor updatedDoctor) {
        for (Doctor doctor : doctors) {
            if (doctor.getId().equals(id)) {
                doctor.setName(updatedDoctor.getName());
                doctor.setSpecialty(updatedDoctor.getSpecialty());
                return doctor;
            }
        }
        return null;
    }

    public Doctor getDoctorById(Long id) {
        for (Doctor doctor : doctors) {
            if (doctor.getId().equals(id)) {
                return doctor;
            }
        }
        return null;
    }

    public boolean deleteDoctor(Long id) {
        for (Doctor doctor : doctors) {
            if (doctor.getId().equals(id)) {
                doctors.remove(doctor);
                return true;
            }
        }
        return false;
    }

    public List<Doctor> getAllDoctors() {
        return doctors;
    }

    public List<Doctor> searchDoctorsByName(String name) {
        List<Doctor> matchingDoctors = new ArrayList<>();
        for (Doctor doctor : doctors) {
            if (doctor.getName().equalsIgnoreCase(name)) {
                matchingDoctors.add(doctor);
            }
        }
        return matchingDoctors;
    }

    public List<Doctor> getDoctorsByHospitalId(Long hospitalId) {
        List<Doctor> matchingDoctors = new ArrayList<>();
        for (Doctor doctor : doctors) {
            if (doctor.getHospitalId().equals(hospitalId)) {
                matchingDoctors.add(doctor);
            }
        }
        return matchingDoctors;
    }

    public List<Doctor> searchDoctorsByHospitalName(String hospitalName) {
        List<Doctor> matchingDoctors = new ArrayList<>();
        for (Doctor doctor : doctors) {
            if (doctor.getHospitalName().equalsIgnoreCase(hospitalName)) {
                matchingDoctors.add(doctor);
            }
        }
        return matchingDoctors;
    }
}
