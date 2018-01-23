import template from '../inPatient.html';
import controller from '../controllers/inPatient.controller';

let inPatientComponent = {
  restrict: 'E',
  bindings: {},
  controller: controller,
  controllerAs: 'vm',
  template: template
};

export default inPatientComponent;
