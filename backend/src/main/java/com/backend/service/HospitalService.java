import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;


@Service
public class HospitalService {

    private final List<Hospital> hospitals = new ArrayList<>();
    private long hospitalIdCounter = 1;

    public Hospital createHospital(Hospital hospital) {
        hospital.setId(hospitalIdCounter++);
        hospitals.add(hospital);
        return hospital;
    }

    public Hospital updateHospital(Long id, Hospital updatedHospital) {
        for (Hospital hospital : hospitals) {
            if (hospital.getId().equals(id)) {
                hospital.setName(updatedHospital.getName());
                hospital.setAddress(updatedHospital.getAddress());
                return hospital;
            }
        }
        return null;
    }

    public Hospital getHospitalById(Long id) {
        for (Hospital hospital : hospitals) {
            if (hospital.getId().equals(id)) {
                return hospital;
            }
        }
        return null;
    }

    public boolean deleteHospital(Long id) {
        for (Hospital hospital : hospitals) {
            if (hospital.getId().equals(id)) {
                hospitals.remove(hospital);
                return true;
            }
        }
        return false;
    }

    public List<Hospital> getAllHospitals() {
        return hospitals;
    }

    public List<Hospital> searchHospitalsByName(String name) {
        List<Hospital> matchingHospitals = new ArrayList<>();
        for (Hospital hospital : hospitals) {
            if (hospital.getName().equalsIgnoreCase(name)) {
                matchingHospitals.add(hospital);
            }
        }
        return matchingHospitals;
    }
}
