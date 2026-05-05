package com.example.demo.controller;

import com.example.demo.auth.RegisterRequest;
import com.example.demo.constants.Role;
import com.example.demo.model.MailStructure;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.Employee;
import com.example.demo.repository.EmployeeRepository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {

	@Autowired
	private EmployeeRepository employeeRepository;
	@Autowired
	private MailController mailController;
	@Autowired
	private AuthenticationController authenticationController;

	// @Autowired
	// private MailService mailService;
	// get all data
	@GetMapping("/employees")
	public List<Employee> getAllEmployees() {
		return employeeRepository.findAll();
	}

	// create
	@PostMapping("/employees")
	@SuppressWarnings("null")
	public Employee createEmployee(@RequestBody Employee employee) {
		Employee emp = employeeRepository.save(employee);
		MailStructure ml = new MailStructure();
		ml.setSubject("Testing");
		ml.setMessage("Dear Employee,\n\nWelcome to our company! Your joining date is: " + employee.getJoiningDate());
		ml.setEmailId(employee.getEmail());
		ml.setLocalDate(employee.getJoiningDate().toString());
		RegisterRequest request = new RegisterRequest();
		request.setFirstname(employee.getName());
		request.setEmail(employee.getEmail());
		request.setRole(Role.EMPLOYEE);
		request.setPassword("Welcome@1");
		authenticationController.register(request);
		mailController.sendMail(employee.getEmail(), ml);
		return emp;
	}

	// get data by id
	@GetMapping("/employees/{id}")
	@SuppressWarnings("null")
	public ResponseEntity<Employee> getByID(@PathVariable(value = "id") Long id) {
		Employee employee = employeeRepository.findById(id).orElseThrow(
				() -> new ResourceNotFoundException("Employee not found with id " + id + "does not exists"));
		return ResponseEntity.ok(employee);
	}

	// update data
	@PutMapping("/employees/{id}")
	@SuppressWarnings("null")
	public ResponseEntity<Employee> updateEmployeeByID(@PathVariable Long id, @RequestBody Employee employeeDetails) {
		Employee employee = employeeRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee with id " + id + "does not exists"));

		employee.setFname(employeeDetails.getFname());
		employee.setLname(employeeDetails.getLname());
		employee.setEmail(employeeDetails.getEmail());
		employee.setDepartment(employeeDetails.getDepartment());
		employee.setDesignation(employeeDetails.getDesignation());
		employee.setJoiningDate(employeeDetails.getJoiningDate());
		employee.setSalary(employeeDetails.getSalary());

		Employee updatedEmployee = employeeRepository.save(employee);

		return ResponseEntity.ok(updatedEmployee);
	}

	@DeleteMapping("/employees/{id}")
	@SuppressWarnings("null")
	public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable Long id) {

		Employee employee = employeeRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee with id " + id + "does not exists"));

		employeeRepository.delete(employee);

		Map<String, Boolean> response = new HashMap<>();
		response.put("Deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);

	}
}