import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";
import { getDb } from "./firebase";

export type EnrollmentStatus = "new" | "contacted" | "enrolled" | "declined";

export type EnrollmentInput = {
  childName: string;
  childDob: string;
  program: string;
  startDate: string;
  parentName: string;
  email: string;
  phone: string;
  address: string;
  emergencyName: string;
  emergencyPhone: string;
  allergies: string;
  notes: string;
};

export type Enrollment = EnrollmentInput & {
  id: string;
  status: EnrollmentStatus;
  createdAt: string;
};

const COLLECTION = "enrollments";

export async function submitEnrollment(input: EnrollmentInput) {
  const ref = await addDoc(collection(getDb(), COLLECTION), {
    ...input,
    status: "new" satisfies EnrollmentStatus,
    createdAt: new Date().toISOString(),
  });
  return ref.id;
}

export async function listEnrollments(): Promise<Enrollment[]> {
  const snap = await getDocs(
    query(collection(getDb(), COLLECTION), orderBy("createdAt", "desc")),
  );
  return snap.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<Enrollment, "id">) }));
}

export async function setEnrollmentStatus(id: string, status: EnrollmentStatus) {
  await updateDoc(doc(getDb(), COLLECTION, id), { status });
}

export async function removeEnrollment(id: string) {
  await deleteDoc(doc(getDb(), COLLECTION, id));
}
